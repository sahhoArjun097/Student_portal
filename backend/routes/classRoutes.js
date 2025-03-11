import express from "express";
import { createClass, getAllClasses, getClassById } from "../controller/classControlller.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/classes", isAdminAuthenticated,createClass);        
router.get("/getclass", getAllClasses);     
router.get("/class/:id", getClassById);    
// router.put("/class/:id", updateClass);    
// router.delete("/class/:id", deleteClass);  
export default router;
