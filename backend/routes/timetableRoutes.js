import express from "express"; 
import { addPeriodToDay, createTimeTable, getAlltimetable, gettimetablebyid, updatedays } from "../controller/timetableController.js";
const router = express.Router();
router.post('/create',createTimeTable);
router.put('/update/:timetableId',updatedays);
router.put('/updatep/:timetableId/:dayId',addPeriodToDay);
router.get('/alltits',getAlltimetable);
router.get('/allttbyid/:id',gettimetablebyid);
export default router;