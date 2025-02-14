import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        required: true
    },
   
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
})

export const Section = mongoose.model("Section", sectionSchema);


