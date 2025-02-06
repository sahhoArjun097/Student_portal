import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLenght: [3, "Name must contain at least 3 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "lastname must contain at least 3 characters"]
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "password must contain atleast 8character"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "please enter a valid email addresss"]
    },
    dob: {
        type: Date,
        required: [true, "DOB is required"],
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"],
    },
    address: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        maxLenght: [9, "phone no. must contain at least 9 digits "]
    },
    class:{
        type:String,
        required:true,
    }
})