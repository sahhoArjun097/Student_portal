import mongoose from "mongoose";
import config from "../config/index.js";

export const dbConnection = () => {
    mongoose.connect(config.MONGO_URL, {
        dbName: "Student_PORT",
    }).then(() => {
        console.log("Database connected ");
    }).catch(err => {
        console.error(`Some error occurred : ${err}`);
        // console.log(config.MONGURL)
    });
};



