import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { Section } from "../models/sectionSchema.js";
import { Class } from "../models/classSchema.js"; // Import Class Model

export const createSection = catchAsyncError(async (req, res, next) => {
    const { sectionName, teachers, students, classId } = req.body;

    if (!sectionName) {
        return next(new ErrorHandler("Section name is required", 400));
    }

    // Create a new section with an empty students array
    const newSection = await Section.create({
        sectionName,
        teachers: teachers || [],
        students: students || [] // Explicitly setting it empty
    });

    // If a classId is provided, add the section to the class
    if (classId) {
        const updatedClass = await Class.findByIdAndUpdate(
            classId,
            { $push: { sections: newSection._id, sectionName: newSection.sectionName } }, // Push new section ID into sections array
            { new: true } // Return updated class document
        );

        if (!updatedClass) {
            return next(new ErrorHandler("Class not found", 404));
        }
    }

    res.status(201).json({
        success: true,
        section: newSection,
        message: "Section created successfully and added to the class"
    });
});
