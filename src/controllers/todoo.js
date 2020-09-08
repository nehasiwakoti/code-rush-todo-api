import * as todoservice from '../services/todo';

//controller to get all todos
export function getAllTodos(req,res,next){
    const userId = +req.params.userId;
    todoservice
    .getAllTodos(userId)
    .then(data => res.json(data))
    .catch(err => next(err));
}

//controller to get specific todo for a user

export function getTodoById(req,res,next){
    const userId = +req.params.userId;
    const todoId = +req.params.todoId;

    todoservice
    .getTodoById(userId , todoId)
    .then(data => res.json(data))
    .catch(err => next(err));
}

//controller to add a todo for user
export function addTodo(req,res,next){
    const {userId} = req.params;
    const todoText = req.body.todoText;

    todoservice
    .addTodo(userId , todoText)
    .then(data => res.json(data))
    .catch(err => next(err));
}

//controller to remove a  todo

export function removeTodo(req,res,next){
        todoservice
    .removeTodo(+req.params.userId , +req.params.todoId)
    .then(data => res.json(data))
    .catch(err => next(err));
}