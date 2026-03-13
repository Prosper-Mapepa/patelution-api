import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TournamentsService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    return this.prisma.tournament.findMany({
      orderBy: { createdAt: 'desc' },
      include: { courts: true, participants: true },
    });
  }

  async findById(id: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id },
      include: { courts: true, participants: true, matches: true },
    });
    if (!tournament) throw new NotFoundException('Tournament not found');
    return tournament;
  }

  async create(data: {
    ownerId: string;
    name: string;
    format: string;
    maxScore: number;
    courtNames: string[];
  }) {
    return this.prisma.tournament.create({
      data: {
        name: data.name,
        format: data.format,
        maxScore: data.maxScore,
        ownerId: data.ownerId,
        courts: {
          create: data.courtNames.map((name) => ({ name })),
        },
      },
      include: { courts: true },
    });
  }

  async update(
    id: string,
    data: Partial<{ name: string; status: string; maxScore: number }>,
  ) {
    return this.prisma.tournament.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.prisma.match.deleteMany({ where: { tournamentId: id } });
    await this.prisma.court.deleteMany({ where: { tournamentId: id } });
    await this.prisma.participant.deleteMany({ where: { tournamentId: id } });
    await this.prisma.tournament.delete({ where: { id } });
  }

  async addParticipant(id: string, displayName: string) {
    return this.prisma.participant.create({
      data: {
        displayName,
        tournamentId: id,
      },
    });
  }

  async updateParticipant(participantId: string, displayName: string) {
    const participant = await this.prisma.participant.findUnique({
      where: { id: participantId },
    });
    if (!participant)
      throw new NotFoundException('Participant not found');
    const oldDisplayName = participant.displayName;
    if (oldDisplayName === displayName) {
      return this.prisma.participant.findUnique({
        where: { id: participantId },
      });
    }
    await this.prisma.participant.update({
      where: { id: participantId },
      data: { displayName },
    });
    // Update all matches in this tournament so pairA/pairB use the new name
    const matches = await this.prisma.match.findMany({
      where: { tournamentId: participant.tournamentId },
    });
    for (const match of matches) {
      const newPairA = this.replaceNameInPair(
        match.pairA,
        oldDisplayName,
        displayName,
      );
      const newPairB = this.replaceNameInPair(
        match.pairB,
        oldDisplayName,
        displayName,
      );
      if (newPairA !== match.pairA || newPairB !== match.pairB) {
        await this.prisma.match.update({
          where: { id: match.id },
          data: { pairA: newPairA, pairB: newPairB },
        });
      }
    }
    return this.prisma.participant.findUnique({
      where: { id: participantId },
    });
  }

  /** Replace one full name with another in a "Name1 / Name2" pair string. */
  private replaceNameInPair(
    pair: string,
    oldName: string,
    newName: string,
  ): string {
    const parts = pair.split('/').map((s) => s.trim());
    return parts.map((p) => (p === oldName ? newName : p)).join(' / ');
  }

  async deleteParticipant(participantId: string) {
    await this.prisma.participant.delete({ where: { id: participantId } });
  }

  async createMatch(data: {
    tournamentId: string;
    courtId: string;
    round: number;
    pairA: string;
    pairB: string;
  }) {
    return this.prisma.match.create({ data });
  }

  async updateMatchScore(id: string, scoreA: number, scoreB: number) {
    return this.prisma.match.update({
      where: { id },
      data: { scoreA, scoreB },
    });
  }

  async listMatches(tournamentId: string) {
    return this.prisma.match.findMany({
      where: { tournamentId },
      orderBy: [{ round: 'asc' }],
    });
  }
}

