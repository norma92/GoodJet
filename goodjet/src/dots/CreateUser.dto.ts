/**
 * per inserire un nuovo record nella tabella User
 * viene effettuata la chiamata Post che è creata nel controller,
 * alla quale viene passato come parametro un body
 * 
 * il body è il json che si troverà, nel body appunto, su postman
 *  
 * il parametro della funzione sarà un'istanza di questa classe
 */
export class CreateUserDto {

    username: string;
    password: string;
    conferma_password: string;

}