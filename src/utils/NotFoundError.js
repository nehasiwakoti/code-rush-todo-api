class NotFoundError extends Error{
    constructor(message){
        super(message);
        this.message = message;
    }
  
}
export default NotFoundError;