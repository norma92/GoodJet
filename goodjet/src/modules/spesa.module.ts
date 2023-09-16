import { Module } from '@nestjs/common';
import { Spesa } from 'src/typeorm/entities/Spesa';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpeseController } from 'src/controllers/spesa/spesa.controller';
import { SpeseService } from 'src/services/spesa/spesa.service';

// è come se non fosse mai usata
@Module({
    imports: [TypeOrmModule.forFeature([Spesa])],
    controllers: [SpeseController],
    providers: [SpeseService]
})
export class SpeseModule {}
