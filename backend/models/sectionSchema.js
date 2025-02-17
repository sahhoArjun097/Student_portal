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
    class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",

    }
   
})

export const Section = mongoose.model("Section", sectionSchema);


