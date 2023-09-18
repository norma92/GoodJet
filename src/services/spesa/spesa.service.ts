import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Spesa } from 'src/typeorm/entities/Spesa';
import { CreateSpesaParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class SpeseService {

    constructor(@InjectRepository(Spesa) private spesaRepository: Repository<Spesa>) {}

    findSpese() {
        return this.spesaRepository.find();
    }

    /**
     * 
     * @param {CreateSpesaParams} spesaDetails - il parametro è quello passato alla funzione dal controller ed è un type
     * @returns 
     */
    createSpesa(spesaDetails: CreateSpesaParams) {

        const newSpesa = this.spesaRepository.create({ ...spesaDetails });
        return this.spesaRepository.save(newSpesa);

    }

    updateUser() {}

    deleteUser() {}

}
