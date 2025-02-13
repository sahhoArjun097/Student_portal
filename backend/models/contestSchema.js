import mongoose from "mongoose";

const contestSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    openingDate: { type: Date, required: true },
    duration: { type: Number, required: true }, 
    registrationDate: { type: Date, required: true },
    registrationLink: { type: String, required: true },
    contestImage: {
        public_id: String,
        url: String,
    },
    hasopen : {type:String, enum:["open","close"] , default :"open"}
}, { timestamps: true });

export const Contest =  mongoose.model("Contest", contestSchema);
