import { useContext } from "react"
import { Context } from "../main"


function Home() {
    // const { darkMode, toggleMode } = useContext(Context);

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
                    <div className="w-full  py-30">
                    </div>
                </div>
            </div>
            <div className="w-full   relative ">
                <div className="absolute top-[-150px] left-0 w-full gap-8 flex flex-col justify-center h-full">
                    <div className="flex flex-wrap md:px-17 justify-center md:justify-between w-full gap-6">


                        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center w-[280px] md:w-[320px]">
                            <img src="/assignment-icon.png" alt="Assignments" className="w-12 h-12 mb-3" />
                            <p className="font-bold text-xl text-gray-700">ASSIGNMENTS</p>
                            <p className="text-sm text-gray-900 text-center">
                                Access your courses, submit assignments on time, and track your progress effortlessly.
                            </p>
                        </div>


                        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center w-[280px] md:w-[320px]">
                            <img src="/announcements-icon.png" alt="Announcements" className="w-12 h-12 mb-3" />
                            <p className="font-bold text-xl text-gray-700">ANNOUNCEMENTS</p>
                            <p className="text-sm text-gray-900 text-center">
                                Stay updated with important notifications, deadlines, and college news in one place.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center w-[280px] md:w-[320px]">
                            <img src="/community-icon.png" alt="Community" className="w-12 h-12 mb-3" />
                            <p className="font-bold text-xl text-gray-700">COMMUNITY</p>
                            <p className="text-sm text-gray-900 text-center">
                                Connect with peers & educators, join discussions, and collaborate on projects easily.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: "url('/homep2.png')" }} className=" bg-cover bg-center bg-no-repeat w-full min-h-screen">

            </div>


            <hr className={` w-full h-[1px] ${darkMode ? "text-white" : "text-black"}`} />
        </>
    )
}

export default Home