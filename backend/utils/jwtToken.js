import config from "../config/index.js";

export  const generateToken = (user,message,statusCode, res)=>{
    const token = user.generateJsonWebToken();
    const cookieName = 
    user.role === "admin" ? "adminToken" : 
    user.role === "teacher" ? "teacherToken" : 
    "studentToken";

    res
    .status(statusCode)
    .cookie(cookieName,token,{
        expires:new Date(
            Date.now()+(config.COOKIE_EXPIRES || 7)*24*60*60*1000
        ),
        httpOnly:true,
        secure: config.NODE_ENV === "production",  // Ensure secure cookies in production
        sameSite: config.NODE_ENV === "production" ? "None" : "Lax",
    })
    .json({
        success:true,
        message,
        user,
        token,
    });
};