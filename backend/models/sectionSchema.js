import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        required: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
    },
    timetable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "timetable"
    }
})

export const Section = mongoose.model("Section", sectionSchema);


