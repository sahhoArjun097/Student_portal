import mongoose from "mongoose";
import jwt from "jsonwebtoken";
// import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: { type: String, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true  },
    gender: { type: String, enum: ["Male", "Female", "Other"],  },
    dateOfBirth: { type: Date },
    StudentClass: { type: String  },
    section: { type: String },
    rollNumber: { type: String, unique: true, sparse: true },
    address: { type: String },
    phone: { type: String },
    department: { type: String },
    role: { type: String, enum: ["student", "teacher", "admin"], required: true , default : "student" },
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  });
  userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  };

export const User = mongoose.model("user", userSchema);
































// const studentSchema = new mongoose.Schema({
//     // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
//     dateOfBirth: { type: Date, required: true },
//     StudentClass: { type: String, required: true },
//     section: { type: String },
//     rollNumber: { type: String, unique: true, required: true },
//     address: { type: String },
//     phone: { type: String },
// }, { timestamps: true });

// const Student = mongoose.model("Student", studentSchema);


// const teacherSchema = new mongoose.Schema({
//     // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     subjects: [{ type: String, required: true }],
//     department: { type: String, required: true },
//     phone: { type: String },
// }, { timestamps: true });

// const Teacher = mongoose.model("Teacher", teacherSchema);


// const adminSchema = new mongoose.Schema({
//     // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     permissions: [{ type: String }],
// }, { timestamps: true });

// const Admin = mongoose.model("Admin", adminSchema);



