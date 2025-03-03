import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    notice: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notice",
      },
    ],
    contest: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contest",
      },
    ],
  },
  { timestamps: true }
);

export const Notification = mongoose.model("Notification", notificationSchema);
