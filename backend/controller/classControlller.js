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


export const getAllClasses = catchAsyncError(async (req, res, next) => {
    const classes = await Class.find().populate("sections");
    res.status(200).json({
        success: true,
        classes
    });
});

export const getClassById = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const classData = await Class.findById(id)


    console.log("Received Class ID:", id);

    if (!classData) {
        return next(new ErrorHandler("Class not found", 404));
    }

    res.status(200).json({
        success: true,
        class: classData
    });
});
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
// ✅ Update a class by ID
export const updateClass = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const { className, sections } = req.body;

    const updatedClass = await Class.findByIdAndUpdate(id, { className, sections }, { new: true });

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