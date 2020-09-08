
import * as userService from '../services/users';



export async function createUser(req,res,next){
    const params = req.body;
    console.log('params= in userController',params)

    try{
        const data = await userService.createUser(params);
    console.log('result= in userController',data)

        res.json(data);
    }catch(err){
        next(err);
    }

}



