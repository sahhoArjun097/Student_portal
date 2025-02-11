
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { User } from "../models/userSchema.js"
import { generateToken } from "../utils/jwtToken.js";
export const StudentRegister = catchAsyncError(async (req, res, next) => {
    try {
        const { name, password, email, gender, dateOfBirth, StudentClass, section, rollNumber, address, phone, role } = req.body;

        if (!name || !email || !password || !gender || !dateOfBirth || !StudentClass || !section || !rollNumber || !address || !phone || !role) {
            return next(new ErrorHandler("Please fill out the entire form", 400));
        }

        // Check if the email OR rollNumber is already used
        const existingUser = await User.findOne({ $or: [{ email }, { rollNumber }] });
        if (existingUser) {
            return next(new ErrorHandler("Student already exists", 400));
        }

        // Create a new student record
        const newStudent = await User.create({
            name,
            email,
            gender,
            password,
            dateOfBirth: new Date(dateOfBirth),
            StudentClass,
            section,
            rollNumber,
            address,
            phone,
            role
        });

        // Generate token for authentication
        generateToken(newStudent, "Student registered successfully", 200, res);

    } catch (error) {
        console.error("Error registering user:", error);
        return next(new ErrorHandler("Internal Server Error", 500)); // Ensure response is sent
    }
});


// export const TeacherRegister = catchAsyncError(async (req, res, next) => {
//     try {
//         const { name, email, password, department, phone, role } = req.body;
//         if (!name || !email || !password || !department || !phone || !role) {
//             return next(new ErrorHandler("please fill full form", 400))
//         }
//         const user = await User.findOne({ email });
//         if (user) {
//             return next(new ErrorHandler("Teacher already exists", 400));
//         }
//         const newteacher = await User.create({
//             name, email, password, department, phone, role
//         })
//         res.status(200).json({
//             success: true,
//             message: "Teacher registered successfully",
//             user: newteacher
//         });

//     } catch (error) {
//         console.error("Error registering user:", error);
//     }
// })
export const TeacherRegister = catchAsyncError(async (req, res , next) => {
    try {
      const { name , email, department, phone,password,role } = req.body;
      const user = await User.findOne({ email });
        if (user) {
            return next(new ErrorHandler("Teacher already exists", 400));
        }
  
        const newteacher = await User.create({
            name,
            email,
            password,
            department,
            phone,
            role
        });
        generateToken(newteacher, "Teacher Register successfully", 200, res)
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

        res.status(200).json({
            success: true,
            message: "Admin registered successfully",
            user:newAdmin

        });
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
        // if(role != user.role){
        //     return next (new ErrorHandler("User with this role didn't exist",400));
        // }
        res.status(200).json({
            success: true,
            message: "User Register successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }

        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));

    }
})

