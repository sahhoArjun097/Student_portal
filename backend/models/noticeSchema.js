import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }, 
    issuedBy: { type: String, required: true },
}, { timestamps: true });

export const Notice = mongoose.model("Notice", noticeSchema);
