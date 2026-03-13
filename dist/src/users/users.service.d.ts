import { PrismaService } from '../prisma/prisma.service';
export type SafeUser = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
};
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<SafeUser[]>;
    findById(id: string): Promise<SafeUser>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        birthDate: Date | null;
        nationality: string | null;
        phone: string | null;
        defaultLocale: string | null;
        gender: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): Promise<SafeUser>;
    update(id: string, data: Partial<{
        firstName: string;
        lastName: string;
    }>): Promise<SafeUser>;
    remove(id: string): Promise<void>;
    private toSafeUser;
}
