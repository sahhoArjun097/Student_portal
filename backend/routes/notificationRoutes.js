import express from "express";
import { getAllNotifications } from "../controller/notificationController.js";
import { isStudentAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.get("/getnotification",isStudentAuthenticated, getAllNotifications);

export default router;
