import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        required: true
    },
    // teachers: [
    //     {
    //         subject: {
    //             type: String,
    //             required: true
    //         },
    //         teacher: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: "User",
    //             required: true
    //         }
    //     }
    // ],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
 
    }],
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    totalStudents: {
        type: Number,
        default: 0
    }
})

export const Section = mongoose.model("Section", sectionSchema);


