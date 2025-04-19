import { TimeTableSchema } from "../models/timetableSchema.js";


export const createTimeTable = async (req, res) => {
  try {
    const { sectionId, days } = req.body;
    const timetable = new TimeTableSchema({ sectionId, days });
    await timetable.save();
    res.status(201).json({ message: 'Timetable created successfully', timetable });
  } catch (error) {
    res.status(500).json({ message: 'Error creating timetable', error });
    console.log(error)
  }
};