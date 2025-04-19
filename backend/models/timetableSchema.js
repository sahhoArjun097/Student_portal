import mongoose from "mongoose";


const timeTableSchema = new mongoose.Schema({
    sectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
    days: [],
  }, { timestamps: true });


export const TimeTableSchema = mongoose.model("timetable", timeTableSchema);