import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/ErrorHandler.js";
import { Section } from "../models/sectionSchema.js";
import { TimeTableSchema } from "../models/timetableSchema.js"; // corrected export

export const createTimeTable = catchAsyncError(async (req, res, next) => {

    try {
        const { sectionId } = req.body;
        const existingTimeTable = await Section.findById(sectionId).populate("timetable")

        if(existingTimeTable.timetable){
            return res.status(200).json({
                success:true,
                message:"Time table already exist",
                timetable:existingTimeTable.timetable,
                timetableId:existingTimeTable.timetable._id
            })
        }
            const dayofweek = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
            const days = dayofweek.map(day => ({
                day,
                periods: []
            }));
            const newTimetable = new TimeTableSchema({
                sectionId,
                days
            })
            await newTimetable.save()
        // }

        const updateId = await Section.findByIdAndUpdate(
            sectionId,
            {$set :{timetable : newTimetable._id}},
            {new: true}
        ).populate("timetable")
        console.log(updateId)

        
            res.status(200).json({
                success: true,
                message: "Timetable created",
                timetable: newTimetable,
               
            })

        // }

    } catch (error) {
        return next(new ErrorHandler("error occure", error))

    }
    // const { sectionId } = req.body;
    // const existingTimeTable = await Section.findById("sectionId").populate("timetable")
    // const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const days = daysOfWeek.map(day => ({
    //     day,
    //     periods: []
    // }));
    // const newTimetable = new TimeTableSchema({
    //     sectionId,
    //     days
    // });
    // const savedTimeTable = await newTimetable.save();


    // const updatedSection = await Section.findByIdAndUpdate(
    //     sectionId,
    //     { $set: { timetable: newTimetable._id } }, // Use $set for one-to-one
    //     { new: true }
    // ).populate("timetable");
    // if (!updatedSection) {
    //     return next(new ErrorHandler("Section not found", 404));
    // }
    // res.status(201).json({
    //     success: true,
    //     timetable: newTimetable,
    //     message: "Timetable created and assigned to the section successfully"
    // });
});


export const updatedays = catchAsyncError(async (req, res, next) => {
    const { timetableId } = req.params;
    const { day, periods } = req.body;
    const timetable = await TimeTableSchema.findById(timetableId);
    console.log(timetable)
    if (!timetable) return res.status(404).json({ message: 'Timetable not found' });

    const existingDay = timetable.days.find(d => d.day === day);
    if (existingDay) {
        existingDay.periods = periods; // replace existing periods
    } else {
        timetable.days.push({ day, periods }); // add new day
    }
    await timetable.save();
    res.status(200).json({ message: 'Day updated successfully', timetable });
})

export const addPeriodToDay = catchAsyncError(async (req, res, next) => {
    const { timetableId, dayId } = req.params;
    const { time, subject, teacher, teacherId } = req.body;
    const timetable = await TimeTableSchema.findById(timetableId);
    // console.log(timetable)
    if (!timetable) return res.status(404).json({ message: "Timetable not found" });
    const day = timetable.days.id(dayId);
    if (!day) return res.status(404).json({ message: "Day not found in timetable" });
    const existingTime = day.periods.find(p => p.time === time);
    if (existingTime) {
        return next(new ErrorHandler("time already aloted", 404));
    }
    else {
        // Add new period
        day.periods.push({ time, subject, teacher });
        await timetable.save();
        res.status(200).json({ message: "Period added successfully", timetable });
    }
    
});


export const getAlltimetable = catchAsyncError(async (req, res, next) => {
    const Tits = await TimeTableSchema.find()
        .populate("days.periods.teacher")
    res.status(200).json({
        success: true,
        Tits
    });
});


export const gettimetablebyid = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const TT = await TimeTableSchema.findById(id).populate("days.periods.teacher")
    if (!TT) {
        return next(new ErrorHandler("Time Table is not created"))
    }
    res.status(200).json({
        success: true,
        TimeTable: TT
    })
})