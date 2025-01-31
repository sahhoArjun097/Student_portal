import { useContext } from "react";
import { Context } from "../main";
import { useState } from "react";

function Profile() {
    const { darkMode } = useContext(Context);
    const [name, setName] = useState("Arjun Agarwal")

    const getInitials = (fullName) => {
        const initials = fullName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
        return initials.length >= 2 ? initials[0] + initials[1] : initials[0];
    };

    return (
        <>
            <div
                className={`min-h-screen w-full flex justify-center bg-cover bg-center bg-no-repeat items-center ${darkMode ? "bg-[#09090b] text-white" : "bg-gray-100 text-black"
                    }`}
                style={{ backgroundImage: "url('/profilebg.jpg')" }}
            //   style={{ height: "100vh" }}
            >
                <div
                    className={`max-w-3xl w-full h-auto rounded-2xl shadow-lg p-6 ${darkMode ? "bg-opacity-0 backdrop-blur-xl" : "bg-opacity-0 backdrop-blur-xl"
                        }`}
                >
                    {/* Header Section */}

                    <div className="flex flex-col md:flex-row items-center gap-6">

                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold overflow-hidden">

                            <span className="text-gray-700 text-6xl ">{getInitials(name)}</span>

                        </div>

                        <div className="text-center md:text-left">
                            <h1 className={` ${darkMode ? " text-gray-100" : " text-gray-800"} text-2xl md:text-3xl font-bold`}>Arjun Agarwal</h1>
                            <p className={`text-sm md:text-base ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                                Roll No: 2100820100044
                            </p>
                            <p className={`text-sm md:text-base ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                                Course: B.Tech (Computer Science)
                            </p>
                            <p className={`text-sm md:text-base ${darkMode ? "text-gray-100" : "text-gray-800"}`} >
                                Email: arjun@example.com
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-6 border-gray-300" />

                    {/* Details Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium">Date of Birth:</p>
                                <p className="text-gray-400">10th January 2003</p>
                            </div>
                            <div>
                                <p className="font-medium">Mobile Number:</p>
                                <p className="text-gray-400">+91-9876543210</p>
                            </div>
                            <div>
                                <p className="font-medium">Address:</p>
                                <p className="text-gray-400">
                                    123, Baker Street, Moradabad, India
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">Semester:</p>
                                <p className="text-gray-400">6th</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-center md:justify-end gap-4">
                        <button
                            className={`px-4 py-2 rounded-md font-medium ${darkMode
                                ? "bg-indigo-600 hover:bg-indigo-500"
                                : "bg-blue-600 text-white hover:bg-blue-500"
                                }`}
                        >
                            Edit Profile
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md font-medium ${darkMode
                                ? "bg-gray-700 hover:bg-gray-600"
                                : "bg-gray-300 text-black hover:bg-gray-200"
                                }`}
                        >
                            View Academics
                        </button>
                    </div>
                </div>
            </div>

            <hr className={`h-[1px] w-full ${darkMode ? "text-white" : "text-black"}`} />
        </>
    );
}

export default Profile;
