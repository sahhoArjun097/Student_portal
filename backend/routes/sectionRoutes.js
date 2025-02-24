import express from "express"
import { createSection } from "../controller/sectionController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.post("/sections",isAdminAuthenticated,createSection)
export default router