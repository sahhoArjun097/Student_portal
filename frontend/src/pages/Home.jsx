import { useContext } from "react"
import { Context } from "../main"
// import InfoCards from "../components/InfoCards"
import '../index.css'
import { Link } from "react-router-dom"


function Home() {

    const { darkMode } = useContext(Context)
    return (
        <>
            <div className={`min-h-screen w-full justify-center p-3 md:p-8 flex  bg-cover bg-center bg-no-repeat ${darkMode ? "bg-[#09090b]" : "bg-white"} `}
                style={{ backgroundImage: "url('/homebg.png')" }}>
                <div className="w-[90%] h-full flex flex-col justify-between ">
                    <div className=" justify-center items-center flex flex-col h-full">
                        <div className=" p-2 md:p-6">
                            <div className="w-full h-full flex flex-col  p-[4px] md:p-1 rounded-sm bg-amber-50">
                                <p>🎉 Introducing StudentPortal</p>
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
                    <div className="w-full py-40 md:py-30">
                    </div>
                </div>
            </div>

            <div className="w-full  relative ">
                <div className="absolute top-[-150px] left-0 w-full gap-8 flex flex-col justify-center h-full">
                    <div className="flex flex-wrap md:px-27 justify-center md:justify-between w-full gap-6">
                        <Link to="/assingments" className="w-[280px] md:w-[320px]">
                            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center w-[280px] md:w-[320px]">
                                <img src="/assignment-icon.png" alt="Assignments" className="w-12 h-12 mb-3" />
                                <p className="font-bold text-xl text-gray-700">ASSIGNMENTS</p>
                                <p className="text-sm text-gray-900 text-center">
                                    Access your courses, submit assignments on time, and track your progress effortlessly.
                                </p>
                            </div>
                        </Link>
                        <Link to="/announcements" className="w-[280px] md:w-[320px]">
                            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col  items-center w-[280px] md:w-[320px]">
                                <img src="/announcements-icon.png" alt="Announcements" className="w-12 h-12 mb-3" />
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
                            </div></Link>


                    </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: "url('/homep2.png')" }}
                className="bg-cover flex justify-center items-center bg-center p-5 bg-no-repeat w-full min-h-screen"
            >
                <div className="hidden md:flex w-[80vw] h-[80vh] absolute justify-center items-center ">
                    <div className="grid grid-cols-5 grid-rows-5 gap-0 w-full h-full relative animate-rotate-cycle">
                        <div className="w-full h-full col-start-3 row-start-1 col-end-4 row-end-2 flex justify-center ">
                            <p className="text-7xl font-bold" style={{
                                textShadow: "0px 0px 17px rgba(255, 255, 0, 0.9)",
                            }}>Features</p>
                        </div>

                        <div className="w-full h-full col-start-1 row-start-2 col-end-2 row-end-3 flex justify-center items-center">
                            <Link to="/lecters">
                                <button
                                    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-2xl font-bold rounded-xl overflow-hidden transform transition-all duration-500  hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
                                >
                                    Lectures
                                </button>
                            </Link>

                        </div>
                        <div className="w-full h-full col-start-1 row-start-3 col-end-2 row-end-4 flex justify-center items-center">
                            <Link to="/contest">
                                <button
                                    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-2xl font-bold rounded-xl overflow-hidden transform transition-all duration-500  hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
                                >
                                    Contests
                                </button>
                            </Link>
                        </div>
                        <div className="w-full h-full col-start-1 row-start-4 col-end-2 row-end-5 flex justify-center items-center">
                            <Link to="/assingments">
                                <button
                                    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-2xl font-bold rounded-xl overflow-hidden transform transition-all duration-500  hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
                                >
                                    Assingments
                                </button>
                            </Link>
                        </div>
                        <div className="w-full h-full col-start-5 row-start-2 col-end-6 row-end-3 flex justify-center items-center">
                            <Link to="/timetable">
                                <button
                                    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-2xl font-bold rounded-xl overflow-hidden transform transition-all duration-500  hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
                                >
                                    TimeTable
                                </button>
                            </Link>
                        </div>
                        <div className="w-full h-full col-start-5 row-start-3 col-end-6 row-end-4 flex justify-center items-center">
                            <Link to="/notice">
                                <button
                                    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-2xl font-bold rounded-xl overflow-hidden transform transition-all duration-500  hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
                                >
                                    Notices
                                </button>
                            </Link>
                        </div>
                        <div className="w-full h-full col-start-5 row-start-4 col-end-6 row-end-5 flex justify-center items-center">
                            <Link to="/fee">
                                <button
                                    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-2xl font-bold rounded-xl overflow-hidden transform transition-all duration-500  hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
                                >
                                    FEE
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>




                <div className="loader relative  w-[200px] h-[200px] md:w-[280px] md:h-[280px] top-0 flex transform -translate-x-1 -translate-y-1">
                    <div className="cube">
                        <div className="face justify-center flex items-center bg-amber-600"></div>
                        <div className="face bg-amber-300"></div>
                        <div className="face bg-amber-700"></div>
                        <div className="face bg-amber-800"></div>
                        <div className="face bg-amber-200"></div>
                        <div className="face flex justify-center items-center transform scale-x-[-1]">
                        </div>
                    </div>
                </div>
            </div>


            <hr className={` w-full h-[1px] ${darkMode ? "text-white" : "text-black"}`} />
        </>
    )
}

export default Home

