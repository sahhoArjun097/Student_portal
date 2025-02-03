import express from "express";
import config from "./config/index.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnections.js";
import messageRouter from "./routes/messageRoutes.js";
import { errorMiddlerware } from "./middlewares/ErrorHandler.js";

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
dbConnection();
app.use(errorMiddlerware)
export default app;



