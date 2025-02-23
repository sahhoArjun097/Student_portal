import express from "express";
import {  Admin, getAllStudents, getAllTeachers, getStudentById, Login, Logout, StudentRegister, TeacherRegister } from "../controller/userController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/student/register",StudentRegister)
router.post("/teacher/register",TeacherRegister)
router.get("/getAllStudent",getAllStudents);
router.get("/getAllTeacher",isAdminAuthenticated,getAllTeachers);
router.get("/getstudentbyid/:id",getStudentById);
router.post("/login",Login);
router.post("/admin",Admin);
router.get("/logout",Logout);
// router.get("/class",classdata);

export default router;