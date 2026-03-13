import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): Promise<{
        user: import("../users/users.service").SafeUser;
        token: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
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
}
