import express from "express";
import { getAllNotices, noticeController } from "../controller/noticeController.js";
import { isTeacherAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/noticeinfo",isTeacherAuthenticated,noticeController);
router.get("/getallNotice",getAllNotices);
// deletecontest
// updatecontest
export default router;