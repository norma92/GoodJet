import { CreateSpesaDto } from 'src/dots/CreateSpese.dto';
import { SpeseService } from 'src/services/spesa/spesa.service';
export declare class SpeseController {
    private spesaService;
    constructor(spesaService: SpeseService);
    getSpese(): Promise<import("../../typeorm/entities/Spesa").Spesa[]>;
    createSpesa(createSpesaDto: CreateSpesaDto): void;
}
