import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({
   
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: true
    },
    schedule: [
        {
            day: {
                type: String,
                enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                required: true
            },
            timeSlot: {
                type: String, 
                required: true
            }
        }
    ]
}, { timestamps: true });

// Create a model
export const TimeTable = mongoose.model("TimeTable", timetableSchema);
