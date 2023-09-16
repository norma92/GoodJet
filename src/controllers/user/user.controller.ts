import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dots/CreateUser.dto';
import { UsersService } from 'src/services/user/user.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    async getUsers() {

        const users = await this.userService.findUsers();
        //nel return è contenuto ciò che verrà ostrato come risposta alla chiamata su postman
        return users;
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        if(createUserDto.password == createUserDto.conferma_password) {

            this.userService.createUser(createUserDto);
            return createUserDto;

        }
        
        console.log('non è stato possibile registrare l\'utente perchè le password non corrispondono')
    }

}
