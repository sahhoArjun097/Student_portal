
import { Link } from "react-router-dom"

function Features() {
    return (
        <>
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
                            <Link to="/assignments">
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
        </>

    )
}

export default Features