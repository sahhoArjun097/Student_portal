
// import mongoose from "mongoose";
// const classSchema = new mongoose.Schema({
//   className: { type: String, required: true },
//   section: { type: String },
//   students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
//   teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
// }, { timestamps: true });

import mongoose from "mongoose";
const classSchema = new mongoose.Schema({
  className: {
    type: Number,
    required: true
  },
  sections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    
  }],
  teachers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }],

})

export const Class = mongoose.model("Class", classSchema);
