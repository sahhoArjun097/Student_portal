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
import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Change '*' to your frontend URL
    credentials: true,  // Allow credentials (cookies, authentication)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed request methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp",
}));
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });
app.use("/api/v1/message",messageRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/contest",contestRouter)
app.use("/api/v1/notice",noticeRouter)
app.use("/api/v1/fee",noticeRouter)
app.use("/api/v1/class",classRouter)
app.use("/api/v1/section",sectionRouter)
app.use("/api/v1/notification", notificationRoutes);
dbConnection();
app.use(errorMiddlerware)
export default app;



