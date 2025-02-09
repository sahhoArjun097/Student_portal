import express from "express";
import { StudentRegister, TeacherRegister } from "../controller/userController.js";

const router = express.Router();

router.post("/student/register",StudentRegister)
router.post("/teacher/register",TeacherRegister)

export default router;