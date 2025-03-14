import mongoose from "mongoose";
import config from "../config/index.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { Section } from "../models/sectionSchema.js";
import { Class } from "../models/classSchema.js";
import { User } from "../models/userSchema.js"
import { generateToken } from "../utils/jwtToken.js";
import jwt from "jsonwebtoken";

// for student 
export const StudentRegister = catchAsyncError(async (req, res, next) => {
    try {
        const { name, password, email, gender, className, dateOfBirth, sectionId, rollNumber, address, phone, role } = req.body;
        if (!name || !email || !password || !gender || !dateOfBirth || !rollNumber || !className || !sectionId || !address || !phone || !role) {
            return next(new ErrorHandler("Please fill out the entire form", 400));
        }
        const existingUser = await User.findOne({ $or: [{ email }, { rollNumber }] });
        if (existingUser) {
            return next(new ErrorHandler("Student already exists", 400));
        }
        const existingClass = await Class.findById(className);
        if (!existingClass) {
            return next(new ErrorHandler("Class doesn't exist", 400));
        }
        
        const newStudent = await User.create({
            name,
            email,
            gender,
            password,
            dateOfBirth: new Date(dateOfBirth),
            rollNumber,
            address,
            phone,
            role,
            sectionId,
            className
        });
        res.status(200).json({
            success: true,
            message: "Student registered successfully",
            user: newStudent
        });
        try {
            await Section.findByIdAndUpdate(
                sectionId,
                { $push: { students: newStudent._id } },
                { new: true }
            );
            // console.log(`Student ${newStudent.name} added to Section ${sectionId}`);
        } catch (error) {
            console.error("Error updating section:", error);
        }

    } catch (error) {
        console.error("Error registering user:", error);
        return next(new ErrorHandler("Internal Server Error", 500));
    }
});


// get all student 

export const getAllStudents = catchAsyncError(async (req, res, next) => {
    try {
        const students = await User.find({ role: "student" });
        res.status(200).json(students);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
});


// get all teacters 

export const getAllTeachers = catchAsyncError(async (req, res, next) => {
    try {
        const teacher = await User.find({ role: "teacher" })
        res.status(200).json(teacher)
        // console.log(teacher)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))

    }
})


// get student by ID
export const getStudentById = async (req, res) => {
    try {
        const student = await User.findById(req.params.id)
            .select("name email gender dateOfBirth StudentClass section rollNumber address phone");

        if (!student) return res.status(404).json({ message: "Student not found" });

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// register teacher 
export const TeacherRegister = catchAsyncError(async (req, res, next) => {
    try {
        const { name, email, department, phone, password,  classId,  role,} = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return next(new ErrorHandler("Teacher already exists", 400));
        }
        const newteacher = await User.create({
            name, email, password, department, phone, role,  classId 
        });
        res.status(200).json({
            success: true,
            message: "Teacher register successfully",
            user: newteacher
        })

        try {
            await Class.findByIdAndUpdate(
                classId ,
                { $push: { teachers: newteacher._id } },
                { new: true }
            )
            console.log(`teacher ${newteacher.name} added to the section ${classId }`)

        } catch (error) {
            console.error("Error updating section:", error);

        }
    } catch (error) {
        console.error("Error registering user:", error);
        return next(new ErrorHandler("Internal Server Error", 500));
    }
});

// register admin

export const Admin = catchAsyncError(async (req, res, next) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return next(new ErrorHandler("Please fill full form", 400));
        }
        const user = await User.findOne({ email })
        if (user) {
            return next(new ErrorHandler("Admin already exist ", 400))
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
            user: newAdmin
        })


    } catch (error) {
        return next(new ErrorHandler(error.message, 500));

    }
})


// get all login

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
        generateToken(user, `${user.role} Login successfully`, 200, res)
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

export const Logout = catchAsyncError(async (req, res, next) => {
    const token = ["token", "studentToken", "teacherToken"];
    let response = res.status(200);
    const tow = req.cookies.token;
    // if (!token) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Unauthorized access",
    //   });
    // }
    // console.log(tow)
    const decoded = jwt.verify(tow, config.JWT_SECRET_KEY);
    // console.log(decoded)
    token.forEach(token => {
        response = response.cookie(token, " ", {
            httpOnly: true,
            expires: new Date(Date.now())
        });
    });
    response.clearCookie("token").json({
        success: true,
        message: `user logout successfully`,
    })
})