import express from "express"; 
import { createTimeTable } from "../controller/timetableController.js";
const router = express.Router();
router.post('/create',createTimeTable);
export default router;