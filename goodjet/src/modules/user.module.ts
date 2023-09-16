import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersController } from 'src/controllers/user/user.controller';
import { SpeseController } from 'src/controllers/spesa/spesa.controller';
import { UsersService } from 'src/services/user/user.service';
import { SpeseService } from 'src/services/spesa/spesa.service';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController, SpeseController],
    providers: [UsersService, SpeseService]
})
export class UsersModule {}
