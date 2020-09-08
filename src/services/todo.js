import logger from '../utils/logger';
import * as UserTodo from '../models/UserTodo';
import {verifyUser} from '../services/users';
import NotFoundError from '../utils/NotFoundError';

//Get all todos for a user
//params userid

export async function getAllTodos(userId){
    await verifyUser(userId);
    logger.info(`Getting list of todos for userId ${userId}`);
    const data = await UserTodo.getAllTodos(userId);

    return{
        data,
        message:`list of todos for userId ${userId}`
    }
}

//Get specific todo by id for a user
//params userId  todoId


export async function getTodoById(userId,todoId){
    await verifyUser(userId);
    logger.info(`Getting todoId for userId ${userId}`);
    const data = await UserTodo.getTodoById(userId,todoId);
    if(!data){
        logger.error(`cannot Find todoId ${todoId} for usedId ${userId}`);

        throw new NotFoundError(`cannot find todoId ${todoId} for userId ${userId}`);
    }
    return {
        data,
        message:`Todo details for todoId ${todoId} and userId ${userId}`
    }
}

export async function addTodo(userId,todoText) {
    console.log('****************************');
    await verifyUser(userId);

    const data = await UserTodo.add(userId,todoText);

    return{
        data,
        message:`New todo added sucessfully for userId ${userId}`
    }
    
}


export async function removeTodo(usedId, todoId){
    await verifyUser(usedId);

    logger.info(`Removing todoId ${todoId} for userId ${userId} `);

    await UserTodo.removeTodo(usedId,todoId);

return{
    message:`Removed todoId ${todoId} for userId ${userId}`
}
}


