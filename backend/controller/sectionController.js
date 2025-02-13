import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { Section } from "../models/sectionSchma.js";

export const createSection = catchAsyncError(async (req, res, next) => {
    const { sectionName, teachers, students } = req.body;

    if (!sectionName) {
        return next(new ErrorHandler("Section name is required", 400));
    }

    const newSection = await Section.create({
        sectionName,
        teachers: teachers || [],
        students: students || []
    });

    res.status(201).json({
        success: true,
        message: "Section created successfully",
        section: newSection
    });
});
