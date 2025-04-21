import mongoose from "mongoose";

const periodSchema = new mongoose.Schema({
    time: { type: String, required: true }, // e.g., "9:00-9:45"
    subject: { type: String, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, // assuming teachers are in users collection
  });
  const daySchema = new mongoose.Schema({
    day: { type: String, required: true }, // e.g., "Monday"
    periods: [periodSchema]
  });
const timeTableSchema = new mongoose.Schema({
    sectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
    days: [daySchema],
  }, { timestamps: true });


export const TimeTableSchema = mongoose.model("timetable", timeTableSchema);
// export const PeriodSchema = mongoose.model("periods",periodSchema)