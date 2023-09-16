import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSpesaDto } from 'src/dots/CreateSpese.dto';
import { SpeseService } from 'src/services/spesa/spesa.service';

@Controller('spese')
export class SpeseController {

    constructor(private spesaService: SpeseService) {}
    @Get()
    getUsers(){}

    @Post()
    createUser(@Body() createSpesaDto: CreateSpesaDto){
        this.spesaService.createSpesa(createSpesaDto);
    }
}
