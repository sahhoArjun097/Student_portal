import express from "express";
import config from "./config/index.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnections.js";
import messageRouter from "./routes/messageRoutes.js";
import { errorMiddlerware } from "./middlewares/ErrorHandler.js";
import userRouter  from "./routes/userRoutes.js"
import contestRouter from "./routes/contestRoutes.js" 
import noticeRouter from "./routes/noticeRoutes.js" 
import classRouter from "./routes/classRoutes.js" 
import sectionRouter from "./routes/sectionRoutes.js" 
const app = express();
app.use(cors({
    origin:'*',credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp",
}));
app.use("/api/v1/message",messageRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/contest",contestRouter)
app.use("/api/v1/notice",noticeRouter)
app.use("/api/v1/fee",noticeRouter)
app.use("/api/v1/class",classRouter)
app.use("/api/v1/section",sectionRouter)
dbConnection();
app.use(errorMiddlerware)
export default app;



