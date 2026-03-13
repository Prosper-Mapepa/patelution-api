import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): Promise<{
        user: import("../users/users.service").SafeUser;
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            nationality: string | null;
            phone: string | null;
            defaultLocale: string | null;
            gender: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        token: string;
    }>;
    createToken(userId: string): Promise<string>;
}
