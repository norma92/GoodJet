import { CreateUserDto } from 'src/dots/CreateUser.dto';
import { UsersService } from 'src/services/user/user.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): void;
    createUser(createUserDto: CreateUserDto): void;
}
