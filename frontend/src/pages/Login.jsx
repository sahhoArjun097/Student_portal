
// import { useContext } from "react"
import { Context } from "../main"
// function Login() {
//     const { darkMode } = useContext(Context);
//     return (
// <>
//         <div className={` w-full min-h-screen justify-center p-3 md:p-8 flex   `} 
//         style={{ backgroundImage: "url('/loginBg.jpg')" }}
//  >
//             {/* <p className={`${darkMode?  "text-white" : "text-black"}`}></p> */}

//             <div className="relative py-3 sm:max-w-xs sm:mx-auto">
//                 <div
//                     className="min-h-106 px-8 py-3 mt-4 text-left bg-opacity-0 backdrop-blur-xl rounded-xl shadow-lg"
//                 >
//                     <div className="flex flex-col justify-center items-center h-full select-none">
//                         <div className="flex flex-col items-center c:\Users\heony\Downloads\freepik__school-with-realistic-and-attractive-apperiance__84713.pngjustify-center gap-2 mb-8">
//                             <div className="w-8 h-8 bg-gray-700" src=""></div>
//                             <p className="m-0 text-[16px] font-semibold dark:text-white">
//                                 Login to your Account
//                             </p>
//                             <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
//                                 Get started with our app, just start section and enjoy experience.
//                             </span>
//                         </div>
//                         <div className="w-full flex flex-col gap-2">
//                             <label className="font-semibold text-xs text-gray-100">Username</label>
//                             <input
//                                 placeholder="Username"
//                                 className="border rounded-lg px-3 py-2 text-white mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
//                             />
//                         </div>
//                     </div>
//                     <div className="w-full flex flex-col gap-2">
//                         <label className="font-semibold text-xs text-gray-400">Password</label>
//                         <input
//                             placeholder="••••••••"
//                             className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none text-white dark:border-gray-500 dark:bg-gray-900"
//                             type="password"
//                         />
//                     </div>
//                     <div>
//                         <button
//                             className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
//                         >
//                             Login
//                         </button>
//                     </div>
//                 </div>
//             </div>


//         </div>
//         <hr className={` w-full h-[1px] ${darkMode ? "text-white":"text-black"}`}/>
//         </>
//     )
// }

// export default Login


// const { darkMode } = useContext(Context);
function Login() {
    return (
      <div className="w-full min-h-screen flex relative">
        {/* Left side (Video Background covering 2/3) */}
        <div className="w-2/3 min-h-screen relative">
          
          
          {/* Overlay for better readability */}
          <div className="absolute inset-0  bg-black bg-opacity-50">
          <video
            className="absolute top-0 p-7 left-0 w-full h-full object-cover"
            src="/globe.mp4"
            autoPlay
            loop
            muted
          ></video>
          </div>
        </div>
  
        {/* Right side (Login Form covering 1/3) */}
        <div className="w-1/3 flex items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Login Form Here</h2>
        </div>
      </div>
    );
  }
  
  export default Login;
  