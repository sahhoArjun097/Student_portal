import { Message } from "../models/messageSchema.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
export const sendMessage = catchAsyncError(async(req,res,next)=>{
    const { firstName, lastName,email} = req.body
    if(!firstName || !lastName || !email){
        return next(new ErrorHandler("please fill full form"),400);
        // return res.status(400).json({
        //     success:false,
        //     message:"please fill full form"
        // });

    }
    await Message.create({firstName, lastName,email});
    res.status(200).json({
        success:true,
        message:"Message sent  successfully"
    });
})