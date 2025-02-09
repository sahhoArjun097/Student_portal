import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { User } from "../models/userSchema.js"

export const StudentRegister = catchAsyncError(async (req, res, next) => {
    try {
        const { name,password, email, gender, dateOfBirth, StudentClass, section, rollNumber, address, phone , role  } = req.body;

        if (!name || !email || !password || !gender || !dateOfBirth || !StudentClass || !section || !rollNumber || !address || !phone || !role) {
            return next(new ErrorHandler("Please fill full form", 400));
        }

        // let user = await User.findOne({ $or: [{ email }, { rollNumber }] });
        let  user = await User.findOne({ email , rollNumber});
        if (user) {
            return next(new ErrorHandler("Student already exists", 400));
        }

        const newUser = await User.create({
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

        res.status(201).json({
            success: true,
            message: "Student registered successfully",
            user: newUser
        });
    } catch (error) {
        console.error("Error registering user:", error);
        // return next(new ErrorHandler("Internal Server Error", 500));
    }
});
