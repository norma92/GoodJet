import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spesa } from './typeorm/entities/Spesa';
import { User } from './typeorm/entities/User';
import { SpeseModule } from './modules/spesa.module';
import { UsersModule } from './modules/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'goodjet',
            entities: [Spesa, User],
            synchronize: true
        }), 
        SpeseModule,
        UsersModule
],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
