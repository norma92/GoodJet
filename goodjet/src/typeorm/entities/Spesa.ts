import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

const today = new Date()

@Entity({ name: 'spesa'})
export class Spesa {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({   name: 'categoria', 
                nullable: false
            })
    categoria: string;

    @Column({   name: 'data pagamento', 
                nullable: false
            })
    data_pagamento: Date;

    @Column({   name: 'importo',
                nullable: false
            })
    importo: number;

    @Column({   name: 'pagante',
                nullable: false,
                length: 50
            })
    pagante: string;

    @Column({   name: 'nota',
                nullable: true,
                length: 300 
            })
    note: string;

    @Column({   name: 'data inserimento',
                default: () => "CURRENT_TIMESTAMP",
                nullable: true
            })
    created_at: Date; 

    @Column({   name: 'ultima modifica',
                default: () => "CURRENT_TIMESTAMP",
                nullable: true
            })
    update_at: Date;

    @Column({   name: 'user',
                nullable: true
            })
    user_id: number; 

}