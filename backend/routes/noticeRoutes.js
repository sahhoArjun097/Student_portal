import express from "express";
import { getAllNotices, noticeController } from "../controller/noticeController.js";
import { isStudentAuthenticated, isTeacherAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/noticeinfo",noticeController);
router.get("/getallNotice",getAllNotices);
// deletecontest
// updatecontest
export default router;