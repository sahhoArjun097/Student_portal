import express from "express"; 
import { addPeriodToDay, createTimeTable, getAlltimetable, updatedays } from "../controller/timetableController.js";
const router = express.Router();
router.post('/create',createTimeTable);
router.put('/update/:timetableId',updatedays);
router.put('/updatep/:timetableId/:dayId',addPeriodToDay);
router.get('/alltits',getAlltimetable);
export default router;