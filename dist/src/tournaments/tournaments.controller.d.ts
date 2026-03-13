import { TournamentsService } from './tournaments.service';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    list(): Promise<({
        participants: {
            id: string;
            createdAt: Date;
            tournamentId: string;
            displayName: string;
        }[];
        courts: {
            id: string;
            name: string;
            tournamentId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        format: string;
        maxScore: number;
        status: string;
        startsAt: Date | null;
        ownerId: string;
    })[]>;
    findOne(id: string): Promise<{
        participants: {
            id: string;
            createdAt: Date;
            tournamentId: string;
            displayName: string;
        }[];
        courts: {
            id: string;
            name: string;
            tournamentId: string;
        }[];
        matches: {
            id: string;
            round: number;
            pairA: string;
            pairB: string;
            scoreA: number;
            scoreB: number;
            tournamentId: string;
            courtId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        format: string;
        maxScore: number;
        status: string;
        startsAt: Date | null;
        ownerId: string;
    }>;
    create(body: {
        ownerId: string;
        name: string;
        format: string;
        maxScore: number;
        courtNames: string[];
    }): Promise<{
        courts: {
            id: string;
            name: string;
            tournamentId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        format: string;
        maxScore: number;
        status: string;
        startsAt: Date | null;
        ownerId: string;
    }>;
    update(id: string, body: Partial<{
        name: string;
        status: string;
        maxScore: number;
    }>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        format: string;
        maxScore: number;
        status: string;
        startsAt: Date | null;
        ownerId: string;
    }>;
    remove(id: string): Promise<void>;
    addParticipant(id: string, body: {
        displayName: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        tournamentId: string;
        displayName: string;
    }>;
    updateParticipant(participantId: string, body: {
        displayName: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        tournamentId: string;
        displayName: string;
    } | null>;
    deleteParticipant(participantId: string): Promise<void>;
    listMatches(id: string): Promise<{
        id: string;
        round: number;
        pairA: string;
        pairB: string;
        scoreA: number;
        scoreB: number;
        tournamentId: string;
        courtId: string;
    }[]>;
    createMatch(id: string, body: {
        courtId: string;
        round: number;
        pairA: string;
        pairB: string;
    }): Promise<{
        id: string;
        round: number;
        pairA: string;
        pairB: string;
        scoreA: number;
        scoreB: number;
        tournamentId: string;
        courtId: string;
    }>;
    updateScore(matchId: string, body: {
        scoreA: number;
        scoreB: number;
    }): Promise<{
        id: string;
        round: number;
        pairA: string;
        pairB: string;
        scoreA: number;
        scoreB: number;
        tournamentId: string;
        courtId: string;
    }>;
    standings(id: string): Promise<{
        wins: number;
        ties: number;
        losses: number;
        points: number;
        matches: number;
        name: string;
    }[]>;
}
