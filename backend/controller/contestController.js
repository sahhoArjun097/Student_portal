import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { Contest } from "../models/contestSchema.js";
import cloudinary from "cloudinary";

export const contestController = catchAsyncError(async (req, res, next) => {
    if (!req.files || !req.files.contestImage) {
        return next(new ErrorHandler("Please upload a contest image", 400));
    }

    const { contestImage } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];

    if (!allowedFormats.includes(contestImage.mimetype)) {
        return next(new ErrorHandler("File format not supported", 400));
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(contestImage.tempFilePath);
    
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        return next(new ErrorHandler("Failed to upload file", 400));
    }

    try {
        const { title, description, duration, registrationDate, registrationLink } = req.body;

        if (!title || !description || !duration || !registrationDate || !registrationLink) {
            return next(new ErrorHandler("Please fill out the full form", 400));
        }

        const newContest = await Contest.create({
            title,
            description,
            duration,
            registrationDate,
            registrationLink,
            contestImage: {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url,
            }
        });

        res.status(200).json({
            success: true,
            message: "Contest created successfully",
            contest: newContest
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});
export const getAllContest = catchAsyncError(async (req, res, next) => {
    try {
        // console.log("Fetching contests..."); // Check if function is called

        const allcontest = await Contest.find();
        
        console.log("Contests fetched:", allcontest); // Check if data is fetched
        
        res.status(200).json({
            success: true,
            message: "All contests",
            contest: allcontest
        });
    } catch (error) {
        console.error("Error fetching contests:", error); // Log error
        return next(new ErrorHandler(error.message, 500));
    }
});



