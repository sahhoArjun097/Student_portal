import express from "express"
import { createSection, getallSection } from "../controller/sectionController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.post("/sections",isAdminAuthenticated,createSection)
router.get("/getallsections",getallSection)
export default router