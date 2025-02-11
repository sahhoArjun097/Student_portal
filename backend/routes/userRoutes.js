import express from "express";
import {  Admin, Login, Logout, StudentRegister, TeacherRegister } from "../controller/userController.js";

const router = express.Router();

router.post("/student/register",StudentRegister)
router.post("/teacher/register",TeacherRegister)
router.post("/login",Login);
router.post("/admin",Admin);
router.get("/logout",Logout);
export default router;