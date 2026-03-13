import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./users.service").SafeUser[]>;
    findOne(id: string): Promise<import("./users.service").SafeUser>;
    create(body: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): Promise<import("./users.service").SafeUser>;
    update(id: string, body: Partial<{
        firstName: string;
        lastName: string;
    }>): Promise<import("./users.service").SafeUser>;
    remove(id: string): Promise<void>;
}
