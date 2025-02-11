import config from "../config/index.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { User } from "../models/userSchema.js"
import { generateToken } from "../utils/jwtToken.js";
import jwt from "jsonwebtoken";
export const StudentRegister = catchAsyncError(async (req, res, next) => {
    try {
        const { name, password, email, gender, dateOfBirth, StudentClass, section, rollNumber, address, phone, role } = req.body;

        if (!name || !email || !password || !gender || !dateOfBirth || !StudentClass || !section || !rollNumber || !address || !phone || !role) {
            return next(new ErrorHandler("Please fill out the entire form", 400));
        }
        const existingUser = await User.findOne({ $or: [{ email }, { rollNumber }] });
        if (existingUser) {
            return next(new ErrorHandler("Student already exists", 400));
        }
        const newStudent = await User.create({
            name,email,gender, password,dateOfBirth: new Date(dateOfBirth), StudentClass,section,rollNumber,address,phone,role
        });
        // generateToken(newStudent, "Student registered successfully", 200, res);
        res.status(200).json({
        success: true,
        message: "student register successfully",
        user : newStudent
    })
    } catch (error) {
        console.error("Error registering user:", error);
        return next(new ErrorHandler("Internal Server Error", 500)); 
    }
});

export const TeacherRegister = catchAsyncError(async (req, res , next) => {
    try {
      const { name , email, department, phone,password,role } = req.body;
      const user = await User.findOne({ email });
        if (user) {
            return next(new ErrorHandler("Teacher already exists", 400));
        }
        const newteacher = await User.create({ 
            name, email, password, department, phone, role
        });
        // generateToken(newteacher, "Teacher Register successfully", 200, res)
        res.status(200).json({
            success: true,
            message: "Teacher register successfully",
            user : newteacher
        })
    } catch (error) {
        console.error("Error registering user:", error);
        return next(new ErrorHandler("Internal Server Error", 500)); // Ensure response is sent
    }
  });

export const Admin = catchAsyncError(async (req, res, next) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return next(new ErrorHandler("Please fill full form", 400));
        }
        const user = await User.findOne({ email })
        if(user){
            return next(new ErrorHandler("Admin already exist ",400))
        }
        const existingAdmin = await User.findOne({ role: "admin" });
        if (existingAdmin) {
            return next(new ErrorHandler("An admin already exists!", 403));
        }
        const newAdmin = await User.create({
            email,
            password,
            role
        });
        // generateToken(newAdmin, "Admin Register successfully", 200, res)
        res.status(200).json({
            success: true,
            message: "Teacher register successfully",
            user : newAdmin
        })


    } catch (error) {
        return next(new ErrorHandler(error.message, 500));

    }
})

export const Login = catchAsyncError(async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new ErrorHandler("please fill full form ", 400));
        }
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("User with this email didn't exist ", 400));
        }
        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return next(new ErrorHandler("password is incorrect", 400));
        }
        generateToken(user,`${user.role} Login successfully`,200,res)
        // res.status(200).json({
        //     success: true,
        //     message: "User Register successfully",
        //     user: {id:user._id,name:user.name,email:user.email,role:user.role,
        //     }
        // })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
})

export const Logout  = catchAsyncError(async (req, res, next) => {
    const token = ["adminToken","studentToken" , "teacherToken"];
    let response = res.status(200);
    const tow = req.cookies.token;
    // if (!token) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Unauthorized access",
    //   });
    // }
    console.log(tow)
    const decoded = jwt.verify(tow,config.JWT_SECRET_KEY);
    console.log(decoded)
    token.forEach(token=>{
        response = response.cookie(token, " ",{
            httpOnly: true,
            expires: new Date(Date.now())
        });
    });
    response.clearCookie("token").json({
        success: true,
        message: `user logout successfully`,
    })
})