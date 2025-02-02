import dotenv from "dotenv";
dotenv.config();
const config = {
    PORT :process.env.PORT,
    CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_CLOUD_api:process.env.CLOUDINARY_CLOUD_api,
    CLOUDINARY_CLOUD_SECRET:process.env.CLOUDINARY_CLOUD_SECRET,
    MONGO_URL: process.env.MONGO_URL,
    COOKIE_EXPIRES:process.env.COOKIE_EXPIRES,
    FRONTEND_URL:process.env.FRONTEND_URL,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
    JWT_EXPIRES:process.env.COOKIE_EXPIRES
}
export default config;
