import  HttpStatusCodes   from 'http-status-codes';
import NotFoundError from '../utils/NotFoundError';
import BadRequestError from '../utils/BadRequestError';
import UnauthorizedError from '../utils/Unauthorized';



export default function genericErrorHandler(err,req,res,next) {
    if (err.isJoi){
        res.status(HttpStatusCodes.BAD_REQUEST).json({
            code:HttpStatusCodes.BAD_REQUEST,
            message:err.name,
            details:err.details
        });
    }

    if (err instanceof NotFoundError){
        res.status(HttpStatusCodes.NOT_FOUND).json({
            code:HttpStatusCodes.NOT_FOUND,
            message:err.message
        })
    }
    if (err instanceof BadRequestError){
        res.status(HttpStatusCodes.BAD_REQUEST).json({
            code:HttpStatusCodes.BAD_REQUEST,
            message:err.message
        })
    }
    if (err instanceof UnauthorizedError){
        res.status(HttpStatusCodes.UNAUTHORIZED).json({
            code:HttpStatusCodes.UNAUTHORIZED,
            message:err.message
        })
    }

    const errorMessage= err.message?
    err.message :
    HttpStatusCodes.getStatusCode(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    if(err){
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
            code:HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message:errorMessage
        });
    }
     
}