import { useContext } from "react"
import { Context } from "../main"
import { useSelector } from "react-redux";
import '../index.css'
import { Link } from "react-router-dom"
import Features from "../components/Features";


function Home() {
    const userData = useSelector((state) => state.authSlice.userData.user)

    const { darkMode } = useContext(Context)
    return (
        <>
            <div className={`min-h-screen w-full justify-center p-3 md:p-8 flex  bg-cover bg-center bg-no-repeat ${darkMode ? "bg-[#09090b]" : "bg-white"} `}
                style={{ backgroundImage: "url('/homebg.png')" }}>
                <div className="w-[90%] h-full flex flex-col justify-between ">
                    <div className=" justify-center items-center flex flex-col h-full">
                        <div className=" p-2 md:p-6">
                            <div className="w-full h-full flex flex-col  p-[4px] md:p-1 rounded-sm bg-amber-50">
                                <p>🎉 Introducing {userData.role}Portal</p>
                            </div>
                        </div>
                        <div className="w-full justify-center flex h-full  mt-10 p-[14px] md:p-1 rounded-sm">
                            <h1
                                className="text-4xl sm:text-4xl md:text-6xl font-bold text-center whitespace-pre-line"
                                style={{
                                    textShadow: "0px 0px 17px rgba(255, 255, 0, 0.9)",
                                }}
                            >
                                Your All-in-One Hub for Learning,{"\n"}Resources, and Growth
                            </h1>
                        </div>

                    </div>

                </div>
            </div>

            <div className=" top-[500px] w-full md:w-[80vw] sm:w-full h-[40vh]  p-3 absolute overflow-x-hidden  ">
                <div className="   w-full h-full justify-between flex" >
                    <div className="flex  md:flex-wrap  justify-center md:justify-between w-full gap-6">
                        <Link to="/assignments" className="w-[280px] md:w-[320px]">
                            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center w-[280px] md:w-[320px]">
                                <img src="/assignment-icon.png" alt="Assignments" className="w-12 h-12 mb-3" />
                                <p className="font-bold text-xl text-gray-700">ASSIGNMENTS</p>
                                <p className="text-sm text-gray-900 text-center">
                                    Access your courses, submit assignments on time, and track your progress effortlessly.
                                </p>
                            </div>
                        </Link>
                        <Link to="/notice" className="w-[280px] md:w-[320px]">
                            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center w-[280px] md:w-[320px]">
                                <img src="/announcements-icon.png" alt="Announcements" className="w-12 h-12 mb-3" />
                                {/* {
                                    userData.role === "teacher" ? <p className="font-bold text-xl text-gray-700"> ADD ANNOUNCEMENTS</p> :
                                        <p className="font-bold text-xl text-gray-700">ANNOUNCEMENTS</p>

                                } */}
                                <p className="font-bold text-xl text-gray-700">ANNOUNCEMENTS</p>
                                <p className="text-sm text-gray-900 text-center">
                                    Stay updated with important notifications, deadlines, timetable, and college news in one place.
                                </p>
                            </div>
                        </Link>
                        <Link to="/community" className="w-[280px] md:w-[320px]">
                            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center w-[280px] md:w-[320px]">
                                <img src="/community-icon.png" alt="Community" className="w-12 h-12 mb-3" />
                                <p className="font-bold text-xl text-gray-700">COMMUNITY</p>
                                <p className="text-sm text-gray-900 text-center">
                                    Connect with peers & educators, join discussions, and collaborate on projects easily.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
           <Features/>


            <hr className={` w-full h-[1px] ${darkMode ? "text-white" : "text-black"}`} />
        </>
    )
}

export default Home

