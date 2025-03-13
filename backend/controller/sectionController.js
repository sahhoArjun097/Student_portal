import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { Section } from "../models/sectionSchema.js";
import { Class } from "../models/classSchema.js"; // Import Class Model
import { User } from "../models/userSchema.js";

export const createSection = catchAsyncError(async (req, res, next) => {
    const { sectionName, teachers, students, classId } = req.body;

    if (!sectionName) {
        return next(new ErrorHandler("Section name is required", 400));
    }

    const newSection = await Section.create({
        sectionName,
        teachers: teachers || [],
        students: students || [] ,
        class:classId
        // Explicitly setting it empty
    });
    res.status(201).json({
        success: true,
        section: newSection,
        message: "Section created successfully and added to the class"
    });

    // If a classId is provided, add the section to the class
    if (classId) {
        const updatedClass = await Class.findByIdAndUpdate(
            classId,
            { $push: { sections: newSection._id } }, // Push new section ID into sections array
            { new: true } // Return updated class document
        ).populate("sections");

        if (!updatedClass) {
            return next(new ErrorHandler("Class not found", 404));
        }
        console.log(updatedClass.sections); 
    }

    
});
// export const getSectionByStudent  = catchAsyncError(async (req , resizeBy, next)=>{
//     try {
//          const findStudent = await Section.findOne({students:userId})
//     } catch (error) {
        
//     }
// })
export const getallSection = catchAsyncError(async (req, res ,next)=>{
    try {
        const section = await Section.find()
        res.status(200).json({
            success:true,
            message:"all section are there",
            

        })
    } catch (error) {
        
    }

})
export const  getSectionByID = catchAsyncError(async (req ,res , next)=>{
    try {
        const section = await Section.findById()
    } catch (error) {
        
    }

})