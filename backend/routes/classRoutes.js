import express from "express";
import { createClass, getAllClasses } from "../controller/classControlller.js";

const router = express.Router();

router.post("/classes", createClass);        
router.get("/getclass", getAllClasses);     
// router.get("/class/:id", getClassById);     
// router.put("/class/:id", updateClass);    
// router.delete("/class/:id", deleteClass);  
export default router;
