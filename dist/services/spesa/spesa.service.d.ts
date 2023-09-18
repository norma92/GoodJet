import { Spesa } from 'src/typeorm/entities/Spesa';
import { CreateSpesaParams } from 'src/utils/types';
import { Repository } from 'typeorm';
export declare class SpeseService {
    private spesaRepository;
    constructor(spesaRepository: Repository<Spesa>);
    findSpese(): Promise<Spesa[]>;
    createSpesa(spesaDetails: CreateSpesaParams): Promise<Spesa>;
    updateUser(): void;
    deleteUser(): void;
}
