import { catchAsyncError } from "../middlewares/catchAsyncError";
import ErrorHandler from "../middlewares/ErrorHandler";



export const assingmentController = catchAsyncError(async(req , rez ,next)=>{
    const {title,subject,classes,teacher} = req.body;
    if(!req.files|| !req.files.AssingmentImage){
        return next(new ErrorHandler("please upload assingment"))
    }
    const {AssingmentImage} = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
})