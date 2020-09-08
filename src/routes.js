
import { Router} from 'express';
import * as endpoints from './Constants/endpoints';
import { validateUserCreation } from './schemas/user';
import {validateAddTodo} from './schemas/todoo';
import  logger from '../src/utils/logger';
import * as userController from './controllers/userss';
import * as todoController from './controllers/todoo';


const router = Router();
const usersJsonPath = '../users.json';

router.get('/' , (request,response,next) => {
    response.json({
         name:'todo-api',
         version: '1.0.0'
     });
 
 });
 
 

  router.post(endpoints.CREATE_USER, validateUserCreation , userController.createUser);

  router.get(endpoints.GET_ALL_TODOS, todoController.getAllTodos );

  router.get(endpoints.GET_TODO_BY_ID, todoController.getTodoById);

  router.post(endpoints.ADD_TODO,validateAddTodo,todoController.addTodo);
  
  router.delete(endpoints.REMOVE_TODO, todoController.removeTodo);
 
   
    
 export default router;