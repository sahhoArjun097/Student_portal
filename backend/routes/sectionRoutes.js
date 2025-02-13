import express from "express"
import { createSection } from "../controller/sectionController.js";

const router = express.Router();
router.post("/sections",createSection)
export default router