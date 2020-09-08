import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './src/routes';
import  logger from './src/utils/logger';
import genericErrorHandler from './src/middlewares/genericErrorHandler';

const loggingMiddleware = (req,res,next) =>{
    const url = req.url;
    const method = req.method;
    
    logger.info(`${method} ${url}`);
    next();
}

const app = express();
app.use(bodyParser.json());
app.use(loggingMiddleware);
app.use(routes);
app.use(genericErrorHandler);

dotenv.config();

app.listen(1234, () => {
    console.log(`listening in port ${process.env.DB_HOST} ${process.env.APP_PORT}`)
});

process.on('uncaughtException', err => {
    logger.error('Uncaught exception', err);
  
    process.exit(1);
  });