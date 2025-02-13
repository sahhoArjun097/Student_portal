import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../middlewares/ErrorHandler.js"
import { Notice } from "../models/noticeSchema.js";

export const noticeController = catchAsyncError(async (req , res ,next)=>{
    try {
        const {title, description,issuedBy } = req.body;
        if(!title||!description||!issuedBy){
            return next(new ErrorHandler("please fill full form",400));
        }
        const newnotice =await Notice.create({title,description,issuedBy})
        res.status(200).json({
            success:true,
            message:"notice added successifully",
            notice:newnotice
        })
        
        
    } catch (error) {
        return next(new ErrorHandler (error.message,500))
    }
   
})

export const getAllNotices = catchAsyncError(async(req,res,next)=>{
    try {
        const notice  =  await Notice.find()
        res.status(200).json({
            success:true,
            message:"all notice are here",
            notice
        })
    } catch (error) {
        return next (new ErrorHandler (error.message,500))
    }
})

