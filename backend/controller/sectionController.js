import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { Section } from "../models/sectionSchema.js";
import { Class } from "../models/classSchema.js"; // Import Class Model
import { User } from "../models/userSchema.js";

export const createSection = catchAsyncError(async (req, res, next) => {
    const { sectionName,  students, classId } = req.body;

    if (!sectionName) {
        return next(new ErrorHandler("Section name is required", 400));
    }

    const newSection = await Section.create({
        sectionName,
        students: students || [] ,
        class:classId
        // Explicitly setting it empty
    });
    res.status(201).json({
        success: true,
        section: newSection,
        message: "Section created successfully and added to the class"
    });
    if (classId) {
        const updatedClass = await Class.findByIdAndUpdate(
            classId,
            { $push: { sections: newSection._id },$slice:-2 }, // Push new section ID into sections array
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
            section
        })
    } catch (error) {
        
    }

})

export const getsectionbyID = catchAsyncError(async(req, res, next)=>{
    const {id} = req.params;
    const sectionData = await Section.findById(id)
     if(!sectionData){
        return next(new ErrorHandler("section didnt found",404));
     }
     res.status(200).json({
        success:true,
        section:sectionData
     })
});

// export const getallstudentsinclassbyID = catchAsyncError(async(req,res,next)=>{
//     const {}
// })