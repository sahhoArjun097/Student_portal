import express from "express";
import { contestController, getAllContest } from "../controller/contestController.js";
import { isAdminAuthenticated, isStudentAuthenticated, isTeacherAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/contestInfo",isTeacherAuthenticated,contestController);
router.get("/getallcontest",isStudentAuthenticated,getAllContest);

// deletecontest
// updatecontest

export default router;