import { PrismaService } from '../prisma/prisma.service';
export declare class TournamentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findById(id: string): Promise<{
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
    create(data: {
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
    update(id: string, data: Partial<{
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
    addParticipant(id: string, displayName: string): Promise<{
        id: string;
        createdAt: Date;
        tournamentId: string;
        displayName: string;
    }>;
    updateParticipant(participantId: string, displayName: string): Promise<{
        id: string;
        createdAt: Date;
        tournamentId: string;
        displayName: string;
    } | null>;
    private replaceNameInPair;
    deleteParticipant(participantId: string): Promise<void>;
    createMatch(data: {
        tournamentId: string;
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
    updateMatchScore(id: string, scoreA: number, scoreB: number): Promise<{
        id: string;
        round: number;
        pairA: string;
        pairB: string;
        scoreA: number;
        scoreB: number;
        tournamentId: string;
        courtId: string;
    }>;
    listMatches(tournamentId: string): Promise<{
        id: string;
        round: number;
        pairA: string;
        pairB: string;
        scoreA: number;
        scoreB: number;
        tournamentId: string;
        courtId: string;
    }[]>;
}
