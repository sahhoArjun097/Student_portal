import app from "./app.js"
import config from "./config/index.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name:config.CLOUDINARY_CLOUD_NAME,
    api_secret:config.CLOUDINARY_CLOUD_SECRET,
    api_key:config.CLOUDINARY_API_KEY
  })
app.listen(config.PORT, () => {
    console.log(`Server listening at port ${config.PORT}`);
  });
  