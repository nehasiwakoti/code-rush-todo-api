import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';


const table = 'user_todos';
export async function getAllTodos(userId){
    const data = await connection
    .select('id','todo_text','is_active','is_completed','created_at')
    .from(table)
    .where('user_id',userId);
    return camelize(data);
}

export async function getTodoById(userId, todoId){
    const data = await connection
    .select('id','todo_text','is_active','is_completed','created_at')
    .from(table)
    .where({'user_id':userId,  'id':todoId});


    return data[0] ? camelize(data[0]) : null;
}

export async function add(userId,todoText){
    const [insertedData] = await connection
    .insert({'user_id': userId,'todo_text':todoText})
    .into(table)
    .returning('*');

    return camelize(insertedData);
}

export async function removeTodo(userId,todoId) {
    console.log({'userId':userId});
    await connection(table)
    .update({'is_active':false})
    .where({'user_id' :userId, 'todo_id':todoId});

    
}