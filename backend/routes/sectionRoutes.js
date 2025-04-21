import express from "express"
import { createSection, getallSection, getsectionbyID } from "../controller/sectionController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.post("/sections",isAdminAuthenticated,createSection)
router.get("/getallsections",getallSection)
router.get("/getsectionbyid/:id",getsectionbyID)
export default router