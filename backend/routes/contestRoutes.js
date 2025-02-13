import express from "express";
import { contestController, getAllContest } from "../controller/contestController.js";
import { isTeacherAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/contestInfo",isTeacherAuthenticated,contestController);
router.get("/getallcontest",getAllContest);

// deletecontest
// updatecontest

export default router;