import { CreateUserDto } from 'src/dots/CreateUser.dto';
import { UsersService } from 'src/services/user/user.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../../typeorm/entities/User").User[]>;
    createUser(createUserDto: CreateUserDto): CreateUserDto;
}
