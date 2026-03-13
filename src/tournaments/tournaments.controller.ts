import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TournamentsService } from './tournaments.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Get()
  list() {
    return this.tournamentsService.list();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentsService.findById(id);
  }

  @Post()
  create(
    @Body()
    body: {
      ownerId: string;
      name: string;
      format: string;
      maxScore: number;
      courtNames: string[];
    },
  ) {
    return this.tournamentsService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: Partial<{ name: string; status: string; maxScore: number }>,
  ) {
    return this.tournamentsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentsService.remove(id);
  }

  @Post(':id/participants')
  addParticipant(
    @Param('id') id: string,
    @Body() body: { displayName: string },
  ) {
    return this.tournamentsService.addParticipant(id, body.displayName);
  }

  @Patch('participants/:participantId')
  updateParticipant(
    @Param('participantId') participantId: string,
    @Body() body: { displayName: string },
  ) {
    return this.tournamentsService.updateParticipant(
      participantId,
      body.displayName,
    );
  }

  @Delete('participants/:participantId')
  deleteParticipant(@Param('participantId') participantId: string) {
    return this.tournamentsService.deleteParticipant(participantId);
  }

  @Get(':id/matches')
  listMatches(@Param('id') id: string) {
    return this.tournamentsService.listMatches(id);
  }

  @Post(':id/matches')
  createMatch(
    @Param('id') id: string,
    @Body()
    body: {
      courtId: string;
      round: number;
      pairA: string;
      pairB: string;
    },
  ) {
    return this.tournamentsService.createMatch({
      tournamentId: id,
      courtId: body.courtId,
      round: body.round,
      pairA: body.pairA,
      pairB: body.pairB,
    });
  }

  @Patch('matches/:matchId/score')
  updateScore(
    @Param('matchId') matchId: string,
    @Body() body: { scoreA: number; scoreB: number },
  ) {
    return this.tournamentsService.updateMatchScore(
      matchId,
      body.scoreA,
      body.scoreB,
    );
  }

  @Get(':id/standings')
  async standings(@Param('id') id: string) {
    const tournament = await this.tournamentsService.findById(id);
    const participants = tournament.participants.map((p) => p.displayName);
    const matches = await this.tournamentsService.listMatches(id);

    const base = new Map<
      string,
      { wins: number; ties: number; losses: number; points: number; matches: number }
    >(
      participants.map((name) => [
        name,
        { wins: 0, ties: 0, losses: 0, points: 0, matches: 0 },
      ]),
    );

    matches.forEach((match) => {
      if (match.scoreA === 0 && match.scoreB === 0) return;

      const [a1, a2] = match.pairA.split('/').map((s) => s.trim());
      const [b1, b2] = match.pairB.split('/').map((s) => s.trim());
      const sideA = [a1, a2].filter(Boolean);
      const sideB = [b1, b2].filter(Boolean);

      const updateSide = (
        names: string[],
        points: number,
        outcome: 'win' | 'loss' | 'tie',
      ) => {
        names.forEach((name) => {
          if (!base.has(name)) {
            base.set(name, {
              wins: 0,
              ties: 0,
              losses: 0,
              points: 0,
              matches: 0,
            });
          }
          const row = base.get(name)!;
          row.points += points;
          row.matches += 1;
          if (outcome === 'win') row.wins += 1;
          if (outcome === 'loss') row.losses += 1;
          if (outcome === 'tie') row.ties += 1;
        });
      };

      if (match.scoreA === match.scoreB) {
        updateSide(sideA, match.scoreA, 'tie');
        updateSide(sideB, match.scoreB, 'tie');
      } else if (match.scoreA > match.scoreB) {
        updateSide(sideA, match.scoreA, 'win');
        updateSide(sideB, match.scoreB, 'loss');
      } else {
        updateSide(sideA, match.scoreA, 'loss');
        updateSide(sideB, match.scoreB, 'win');
      }
    });

    return Array.from(base.entries())
      .map(([name, row]) => ({ name, ...row }))
      .sort((a, b) => b.points - a.points);
  }
}

