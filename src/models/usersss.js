import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';


const table = 'users';

export async function create(params){
    params = snakeize(params)
    console.log('***params = ',params)
    const [data] = await connection.insert(params).into(table).returning('*');
    return camelize(data);
}


export async function getUserByEmail(email){
    const [ data ] =await connection.select('*').from(table).where({email});


    return data ? camelize(data): null;
}

export async function getUserById(id){
    const [ data ] =await connection.select('*').from(table).where({id});


    return data ? camelize(data): null;
}