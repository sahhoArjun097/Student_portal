import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { Class } from "../models/classSchema.js";


export const createClass = catchAsyncError(async (req, res, next) => {
    const { className, sections } = req.body;

    if (!className ) {
        return next(new ErrorHandler("Please provide all required fields", 400));
    }
    const existingClass = await Class.findOne({ className});
    if (existingClass) {
        return next(new ErrorHandler("Class  already exists", 400));
    }

    const newClass = await Class.create({ className, sections });

    res.status(201).json({
        success: true,
        message: "Class created successfully",
        class: newClass
    });
});

// ✅ Get all classes
export const getAllClasses = catchAsyncError(async (req, res, next) => {
    const classes = await Class.find().populate("sections");

    res.status(200).json({
        success: true,
        classes
    });
});

// ✅ Get a single class by ID
export const getClassById = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const classData = await Class.findById(id).populate("sections");

    if (!classData) {
        return next(new ErrorHandler("Class not found", 404));
    }

    res.status(200).json({
        success: true,
        class: classData
    });
});

// ✅ Update a class by ID
export const updateClass = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const { className, sections, subjects } = req.body;

    const updatedClass = await Class.findByIdAndUpdate(id, { className, sections, subjects }, { new: true });

    if (!updatedClass) {
        return next(new ErrorHandler("Class not found", 404));
    }

    res.status(200).json({
        success: true,
        message: "Class updated successfully",
        class: updatedClass
    });
});

// ✅ Delete a class by ID
export const deleteClass = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const classData = await Class.findByIdAndDelete(id);

    if (!classData) {
        return next(new ErrorHandler("Class not found", 404));
    }

    res.status(200).json({
        success: true,
        message: "Class deleted successfully"
    });
});
// 