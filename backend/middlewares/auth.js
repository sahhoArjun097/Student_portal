import config from "../config/index.js";
import { User } from "../models/userSchema.js";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "./ErrorHandler.js";
import jwt from "jsonwebtoken";

export  const  isAdminAuthenticated = catchAsyncError(async( req , res , next)=>{
    const token = req.cookies?.token
    if(!token){
        return next(new ErrorHandler("Admin is not authenticated",400))
    }
    const  decoded = jwt.verify(token,config.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if(req.user.role!=="admin" ){
        return next(new ErrorHandler(`${req.user.role} not authorized to this resource`,403 ))
    }
    next()
})

export const isTeacherAuthenticated = catchAsyncError(async(req,res,next)=>{
    const token = req.cookies?.token
    if(!token){
        return next(new ErrorHandler ("Teacher is not authenticated",400))
    }
    const decoded = jwt.verify(token,config.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if(req.user.role!=="teacher"){
        return next(new ErrorHandler(`${req.user.role} not authorized to this resource`,403))
    }
    next()
})

export const isStudentAuthenticated = catchAsyncError(async(req ,res ,next)=>{
    const token  = req.cookies?.token
    if(!token){
        return next(new ErrorHandler("Student is not Authenticated",400))
    }
    const decoded = jwt.verify(token,config.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if(req.user.role!=="student"){
        return next(new ErrorHandler(`${req.user.role} not authorized to this resources`,403))
    }
})