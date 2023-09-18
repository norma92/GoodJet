import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSpesaDto } from 'src/dots/CreateSpese.dto';
import { SpeseService } from 'src/services/spesa/spesa.service';

@Controller('spese')
export class SpeseController {

    constructor(private spesaService: SpeseService) {}

    /**
     * 
     */
    @Get()
    async getSpese(){

        const spese = await this.spesaService.findSpese();
        return spese;
    }

    /**
     * la funzione crea un nuovo record che verrà inserito nella tabella Spesa
     * 
     * La chiamata è una Post,
     * alla quale si passa un elemento di tipo CreateSpesaDto
     * praticamente corrisponde al JSON inserito nel body di postman
     * 
     * @param {CreateSpesaDto} createSpesaDto - oggetto che verrà inserito nella tabella Spesa
     */
    @Post()
    createSpesa(@Body() createSpesaDto: CreateSpesaDto){
        this.spesaService.createSpesa(createSpesaDto);
    }
}
