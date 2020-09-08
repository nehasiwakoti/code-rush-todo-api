import  logger from '../utils/logger';
import * as User from '../models/usersss';
import BadRequestError from '../utils/BadRequestError';
import NotFoundError from '../utils/NotFoundError';


export async function createUser (params) {
    const existingUser = await User.getUserByEmail(params.email);
    if(existingUser) {
        logger.error(`There is already an existing user with this email`);


        throw new BadRequestError(`There is already an existing user with this email`);
    }

       const userInsertData = await User.create(params);
      return{
        data:userInsertData,
        message:" New user added sucesfully"
    };
   
}

export async function verifyUser(userId){
    logger.info(`Verifying if userId ${userId} exists`);

    const user = await User.getUserById(userId);
    if(!user){
        logger.error(`Cannot find user with id ${userId}`);

        throw new NotFoundError(`Cannot find user with id ${userId}`);
    }
}

