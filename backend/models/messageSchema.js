import mongoose from "mongoose";
import validator from "validator";
const mongooseSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        minLength:[3,"name must have 3 character"]
    },
    lastName:{
        type:String,
        require:true,
        minLength:[3,"name must have 3 character"]

    },
    email:{
        type : String,
        require:true,
        validate:[validator.isEmail,"Please enter valid email address"]
    }
})

export const Message = mongoose.model("message", mongooseSchema);