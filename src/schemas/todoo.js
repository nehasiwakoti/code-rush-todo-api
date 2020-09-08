import Joi from 'joi';


const ADD_TODO_SCHEMA = Joi.object().keys({
    todoText: Joi.string().max(500).required().allow('')
});



export  function validateAddTodo(req,res,next){
    console.log('fdfdfdfdfd');
    try{
        Joi.assert(req.body,ADD_TODO_SCHEMA);
        next();
    }catch(err){
        next(err);
    }
}