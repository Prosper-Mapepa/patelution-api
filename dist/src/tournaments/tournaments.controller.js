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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsController = void 0;
const common_1 = require("@nestjs/common");
const tournaments_service_1 = require("./tournaments.service");
let TournamentsController = class TournamentsController {
    tournamentsService;
    constructor(tournamentsService) {
        this.tournamentsService = tournamentsService;
    }
    list() {
        return this.tournamentsService.list();
    }
    findOne(id) {
        return this.tournamentsService.findById(id);
    }
    create(body) {
        return this.tournamentsService.create(body);
    }
    update(id, body) {
        return this.tournamentsService.update(id, body);
    }
    remove(id) {
        return this.tournamentsService.remove(id);
    }
    addParticipant(id, body) {
        return this.tournamentsService.addParticipant(id, body.displayName);
    }
    updateParticipant(participantId, body) {
        return this.tournamentsService.updateParticipant(participantId, body.displayName);
    }
    deleteParticipant(participantId) {
        return this.tournamentsService.deleteParticipant(participantId);
    }
    listMatches(id) {
        return this.tournamentsService.listMatches(id);
    }
    createMatch(id, body) {
        return this.tournamentsService.createMatch({
            tournamentId: id,
            courtId: body.courtId,
            round: body.round,
            pairA: body.pairA,
            pairB: body.pairB,
        });
    }
    updateScore(matchId, body) {
        return this.tournamentsService.updateMatchScore(matchId, body.scoreA, body.scoreB);
    }
    async standings(id) {
        const tournament = await this.tournamentsService.findById(id);
        const participants = tournament.participants.map((p) => p.displayName);
        const matches = await this.tournamentsService.listMatches(id);
        const base = new Map(participants.map((name) => [
            name,
            { wins: 0, ties: 0, losses: 0, points: 0, matches: 0 },
        ]));
        matches.forEach((match) => {
            if (match.scoreA === 0 && match.scoreB === 0)
                return;
            const [a1, a2] = match.pairA.split('/').map((s) => s.trim());
            const [b1, b2] = match.pairB.split('/').map((s) => s.trim());
            const sideA = [a1, a2].filter(Boolean);
            const sideB = [b1, b2].filter(Boolean);
            const updateSide = (names, points, outcome) => {
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
                    const row = base.get(name);
                    row.points += points;
                    row.matches += 1;
                    if (outcome === 'win')
                        row.wins += 1;
                    if (outcome === 'loss')
                        row.losses += 1;
                    if (outcome === 'tie')
                        row.ties += 1;
                });
            };
            if (match.scoreA === match.scoreB) {
                updateSide(sideA, match.scoreA, 'tie');
                updateSide(sideB, match.scoreB, 'tie');
            }
            else if (match.scoreA > match.scoreB) {
                updateSide(sideA, match.scoreA, 'win');
                updateSide(sideB, match.scoreB, 'loss');
            }
            else {
                updateSide(sideA, match.scoreA, 'loss');
                updateSide(sideB, match.scoreB, 'win');
            }
        });
        return Array.from(base.entries())
            .map(([name, row]) => ({ name, ...row }))
            .sort((a, b) => b.points - a.points);
    }
};
exports.TournamentsController = TournamentsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/participants'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "addParticipant", null);
__decorate([
    (0, common_1.Patch)('participants/:participantId'),
    __param(0, (0, common_1.Param)('participantId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "updateParticipant", null);
__decorate([
    (0, common_1.Delete)('participants/:participantId'),
    __param(0, (0, common_1.Param)('participantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "deleteParticipant", null);
__decorate([
    (0, common_1.Get)(':id/matches'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "listMatches", null);
__decorate([
    (0, common_1.Post)(':id/matches'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "createMatch", null);
__decorate([
    (0, common_1.Patch)('matches/:matchId/score'),
    __param(0, (0, common_1.Param)('matchId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "updateScore", null);
__decorate([
    (0, common_1.Get)(':id/standings'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "standings", null);
exports.TournamentsController = TournamentsController = __decorate([
    (0, common_1.Controller)('tournaments'),
    __metadata("design:paramtypes", [tournaments_service_1.TournamentsService])
], TournamentsController);
//# sourceMappingURL=tournaments.controller.js.map