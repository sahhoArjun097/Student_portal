import express from "express";
import { contestController, getAllContest } from "../controller/contestController.js";
import { isAdminAuthenticated, isTeacherAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/contestInfo", contestController);
router.get("/getallcontest",getAllContest);

// deletecontest
// updatecontest

export default router;