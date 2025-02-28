import express from "express";
import {  Admin, getAllStudents, getAllTeachers, getStudentById, Login, Logout, StudentRegister, TeacherRegister } from "../controller/userController.js";
import { isAdminAuthenticated, isTeacherAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/student/register",isAdminAuthenticated,StudentRegister)
router.post("/teacher/register",isAdminAuthenticated,TeacherRegister)
router.get("/getAllStudent",getAllStudents);
router.get("/getAllTeacher",getAllTeachers);
router.get("/getstudentbyid/:id",getStudentById);
router.post("/login",Login);
router.post("/admin",Admin);
router.get("/logout",Logout);
// router.get("/class",classdata);

export default router;