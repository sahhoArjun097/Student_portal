
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {

    const userData = useSelector((state) => state.authSlice.userData.user);
    // console.log(userData)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [classes, setClasses] = useState("");
    const getOrdinalSuffix = (classNumber) => {
        if (classNumber === 1) return "st";
        if (classNumber === 2) return "nd";
        if (classNumber === 3) return "rd";
        return "th";
    };
    const fetchClass = async () => {
        try {
            if (!userData?.classNames || userData.classNames.length === 0) {
                return;
            }

            const classId = userData.classNames[0]; // Extracting first class ID from the array

            const { data } = await axios.get(`http://localhost:4000/api/v1/class/class/${classId}`);

            if (data?.class?.className) {
                const classNum = parseInt(data.class.className, 10);
                const suffix = getOrdinalSuffix(classNum);
                setClasses(`${classNum}${suffix} Class`);
            }
        } catch (error) {
            console.error("Error fetching class:", error.response ? error.response.data : error.message);
        }
    };


    useEffect(() => {
        if (userData?.classNames?.length > 0) {
            fetchClass();
        }
    }, [userData?.classNames]); 


    // const fetchStudents = async () => {
    //     try {
    //       const { data } = await axios.get(
    //         "http://localhost:4000/api/v1/class/getclass",  
    //         { withCredentials: true }
    //       );
    //       setStudents(data);
    //       console.log(data)
    //     } catch (error) {
    //       console.error("Error fetching students:", error.response?.data || error.message);
    //     }
    //   };

    //   useEffect(() => {
    //     fetchStudents();
    //   }, []);

    const getInitials = (fullName) => {
        return fullName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
    };

    const handleLogOut = () => {
        dispatch(removeUser());
        navigate("/login");
    };
    if (userData.role === "admin") {
        return <div className="flex min-h-screen flex-col w-full justify-center items-center">
            <div className="w-[50%] h-10 border shadow-2xl flex justify-center items-center">
                <p className="font-bold uppercase  text-xl">Daddy is here</p>

            </div>
            <div className="mt-6 flex justify-end">
                <button
                    className="group flex items-center justify-center w-12 h-12 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
                    onClick={handleLogOut}
                >
                    <svg className="w-5 h-5" viewBox="0 0 512 512" fill="white">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                </button>
            </div>
        </div>
    }
    return (
        <div className="min-h-screen flex w-full justify-center items-center bg-white text-black">
            <div className="max-w-3xl w-full p-8 rounded-lg shadow-2xl bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
                <div className="flex items-center gap-6 justify-between">
                    <div className="px-5">
                        <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center justify-center text-2xl font-bold shadow-lg">
                            <span className="text-white">{getInitials(userData.name)}</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                            <p className="text-lg text-gray-600">{userData.email}</p>
                        </div>

                    </div>
                    <div className="earth justify-center flex flex-col items-center">
                        <svg width="200" height="100" viewBox="0 0 200 100" className="mb-[-60px]">
                            <defs>
                                <path id="curvePath" d="M 20,80 A 90,90 0 0,1 180,80" fill="transparent" />
                            </defs>
                            <text fill="blue" fontSize="16" fontWeight="bold">
                                <textPath href="#curvePath" startOffset="50%" textAnchor="middle" className="bg-gradient-to-r from-purple-400">
                                    SPRINGFIELD ACADEMY
                                </textPath>
                            </text>
                        </svg>
                        <div className="earth-loader">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    transform="translate(100 100)"
                                    d="M29.4,-17.4C33.1,1.8,27.6,16.1,11.5,31.6C-4.7,47,-31.5,63.6,-43,56C-54.5,48.4,-50.7,16.6,-41,-10.9C-31.3,-38.4,-15.6,-61.5,-1.4,-61C12.8,-60.5,25.7,-36.5,29.4,-17.4Z"
                                    fill="#7CC133"
                                ></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    transform="translate(100 100)"
                                    d="M31.7,-55.8C40.3,-50,45.9,-39.9,49.7,-29.8C53.5,-19.8,55.5,-9.9,53.1,-1.4C50.6,7.1,43.6,14.1,41.8,27.6C40.1,41.1,43.4,61.1,37.3,67C31.2,72.9,15.6,64.8,1.5,62.2C-12.5,59.5,-25,62.3,-31.8,56.7C-38.5,51.1,-39.4,37.2,-49.3,26.3C-59.1,15.5,-78,7.7,-77.6,0.2C-77.2,-7.2,-57.4,-14.5,-49.3,-28.4C-41.2,-42.4,-44.7,-63,-38.5,-70.1C-32.2,-77.2,-16.1,-70.8,-2.3,-66.9C11.6,-63,23.1,-61.5,31.7,-55.8Z"
                                    fill="#7CC133"
                                ></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    transform="translate(100 100)"
                                    d="M30.6,-49.2C42.5,-46.1,57.1,-43.7,67.6,-35.7C78.1,-27.6,84.6,-13.8,80.3,-2.4C76.1,8.9,61.2,17.8,52.5,29.1C43.8,40.3,41.4,53.9,33.7,64C26,74.1,13,80.6,2.2,76.9C-8.6,73.1,-17.3,59,-30.6,52.1C-43.9,45.3,-61.9,45.7,-74.1,38.2C-86.4,30.7,-92.9,15.4,-88.6,2.5C-84.4,-10.5,-69.4,-20.9,-60.7,-34.6C-52.1,-48.3,-49.8,-65.3,-40.7,-70C-31.6,-74.8,-15.8,-67.4,-3.2,-61.8C9.3,-56.1,18.6,-52.3,30.6,-49.2Z"
                                    fill="#7CC133"
                                ></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    transform="translate(100 100)"
                                    d="M39.4,-66C48.6,-62.9,51.9,-47.4,52.9,-34.3C53.8,-21.3,52.4,-10.6,54.4,1.1C56.3,12.9,61.7,25.8,57.5,33.2C53.2,40.5,39.3,42.3,28.2,46C17,49.6,8.5,55.1,1.3,52.8C-5.9,50.5,-11.7,40.5,-23.6,37.2C-35.4,34,-53.3,37.5,-62,32.4C-70.7,27.4,-70.4,13.7,-72.4,-1.1C-74.3,-15.9,-78.6,-31.9,-73.3,-43C-68.1,-54.2,-53.3,-60.5,-39.5,-60.9C-25.7,-61.4,-12.9,-56,1.1,-58C15.1,-59.9,30.2,-69.2,39.4,-66Z"
                                    fill="#7CC133"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-300" />
                <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">
                        {userData.role === "teacher" ? "Teacher " : "Student "}
                        at  <span className="text-indigo-600 font-bold">Springfield Academy</span>
                    </h2>
                </div>
                {userData.role === "student" ? (
                    <div className="space-y-3 text-gray-700">
                        <p><strong>Class no :</strong> {classes}</p>
                        <p><strong>Roll No:</strong> {userData.rollNumber}</p>

                        <p><strong>Date of Birth:</strong> {new Date(userData.dateOfBirth).toDateString()}</p>
                        <p><strong>Phone:</strong> {userData.phone}</p>
                        <p><strong>Address:</strong> {userData.address}</p>
                        <p><strong>Gender:</strong> {userData.gender}</p>
                    </div>
                ) : (
                    <div className="space-y-3 text-gray-700">
                        <p><strong>Department:</strong> {userData.department}</p>
                        <p><strong>Phone:</strong> {userData.phone}</p>
                    </div>
                )}

                {/* Logout Button */}
                <div className="mt-6 flex justify-end">
                    <button
                        className="group flex items-center justify-center w-12 h-12 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
                        onClick={handleLogOut}
                    >
                        <svg className="w-5 h-5" viewBox="0 0 512 512" fill="white">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
