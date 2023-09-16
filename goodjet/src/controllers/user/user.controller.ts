import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dots/CreateUser.dto';
import { UsersService } from 'src/services/user/user.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}
    @Get()
    getUsers(){}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        if(createUserDto.password == createUserDto.conferma_password)
            this.userService.createUser(createUserDto);
        console.log('non è stato possibile registrare l\'utente perchè le password non corrispondono')
    }

}
