/**
 * per effettuare una insert nella tabella User
 * la funzione della post del controller chiama a sua volta una funzione che si trova nel service
 * 
 * la funzione del controller prende come parametro un elemento di tipo CreateUserDto,
 * lo passa alla funzione del service, che accetta come parametro un'istanza del type sottostante
 */
export type CreateUserParams = {
    username:string;
    password: string;
}

export type CreateSpesaParams = {
    categoria: string;
    data_pagamento: Date;
    importo: number;
    pagante: string;
    note: string;

}