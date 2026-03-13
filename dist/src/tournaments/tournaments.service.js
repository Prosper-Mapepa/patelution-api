"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TournamentsService = class TournamentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list() {
        return this.prisma.tournament.findMany({
            orderBy: { createdAt: 'desc' },
            include: { courts: true, participants: true },
        });
    }
    async findById(id) {
        const tournament = await this.prisma.tournament.findUnique({
            where: { id },
            include: { courts: true, participants: true, matches: true },
        });
        if (!tournament)
            throw new common_1.NotFoundException('Tournament not found');
        return tournament;
    }
    async create(data) {
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
    async update(id, data) {
        return this.prisma.tournament.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.prisma.match.deleteMany({ where: { tournamentId: id } });
        await this.prisma.court.deleteMany({ where: { tournamentId: id } });
        await this.prisma.participant.deleteMany({ where: { tournamentId: id } });
        await this.prisma.tournament.delete({ where: { id } });
    }
    async addParticipant(id, displayName) {
        return this.prisma.participant.create({
            data: {
                displayName,
                tournamentId: id,
            },
        });
    }
    async updateParticipant(participantId, displayName) {
        const participant = await this.prisma.participant.findUnique({
            where: { id: participantId },
        });
        if (!participant)
            throw new common_1.NotFoundException('Participant not found');
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
        const matches = await this.prisma.match.findMany({
            where: { tournamentId: participant.tournamentId },
        });
        for (const match of matches) {
            const newPairA = this.replaceNameInPair(match.pairA, oldDisplayName, displayName);
            const newPairB = this.replaceNameInPair(match.pairB, oldDisplayName, displayName);
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
    replaceNameInPair(pair, oldName, newName) {
        const parts = pair.split('/').map((s) => s.trim());
        return parts.map((p) => (p === oldName ? newName : p)).join(' / ');
    }
    async deleteParticipant(participantId) {
        await this.prisma.participant.delete({ where: { id: participantId } });
    }
    async createMatch(data) {
        return this.prisma.match.create({ data });
    }
    async updateMatchScore(id, scoreA, scoreB) {
        return this.prisma.match.update({
            where: { id },
            data: { scoreA, scoreB },
        });
    }
    async listMatches(tournamentId) {
        return this.prisma.match.findMany({
            where: { tournamentId },
            orderBy: [{ round: 'asc' }],
        });
    }
};
exports.TournamentsService = TournamentsService;
exports.TournamentsService = TournamentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TournamentsService);
//# sourceMappingURL=tournaments.service.js.map