import { User } from 'src/typeorm/entities/User';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findUsers(): void;
    createUser(userDetails: CreateUserParams): Promise<User>;
    updateUser(): void;
    deleteUser(): void;
}
