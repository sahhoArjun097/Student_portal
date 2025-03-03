import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Contest } from "../models/contestSchema.js";
import { Notice } from "../models/noticeSchema.js";
// import { Notification } from "../models/notificationSchema.js";

export const getAllNotifications = catchAsyncError(async (req, res, next) => {
  const notice = await Notice.find() 
   const contest = await Contest.find()
  res.status(200).json({
    success: true,
    notifications : {notice , contest},
  });
});
