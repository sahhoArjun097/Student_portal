import express from "express";
import {  Admin, Login, Logout, StudentRegister, TeacherRegister } from "../controller/userController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/student/register",isAdminAuthenticated,StudentRegister)
router.post("/teacher/register",isAdminAuthenticated,TeacherRegister)
router.post("/login",Login);
router.post("/admin",Admin);
router.get("/logout",Logout);
export default router;