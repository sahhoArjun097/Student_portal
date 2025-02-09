import express from "express";
import { StudentRegister } from "../controller/userController.js";

const router = express.Router();

router.post("/student/register",StudentRegister)
export default router;