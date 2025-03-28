import app from "./app.js"
import config from "./config/index.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
    
  })
  // console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY)
app.listen(config.PORT, () => {
    console.log(`Server listening at port ${config.PORT}`);
  });
  