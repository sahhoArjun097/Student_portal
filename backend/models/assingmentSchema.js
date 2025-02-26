import mongoose from "mongoose";

const assingmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    Subject: { type: String, required: true },
    AssingmentImage: {
        public_id: String,
        url: String,
    },
    classes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true });

export const Assingment = mongoose.model("Assingment", assingmentSchema);
