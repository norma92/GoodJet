import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * questa classe rappresenta la tabella nel db
 * non necessariamente tutte le proprietà saranno riportate nella classe
 * che verrà usata per costruire la repository
 */
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({   name: 'user',
                length: 30,
                nullable: false
            })
    username: string;

    @Column({   name: 'password',
                length: 20,
                nullable: false
            })
    password: string;
    
}