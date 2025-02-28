import { useContext } from "react";
import { Context } from "../main";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { darkMode } = useContext(Context);
    const userData = useSelector((state) => state.authSlice.userData.user);
    console.log(userData);
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
    

    return (
        <div className={`min-h-screen flex  w-full justify-center items-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
            <div className={`max-w-2xl w-full p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-gray-400 flex items-center justify-center text-2xl font-bold">
                        <span className="text-gray-700">{getInitials(userData.name)}</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{userData.name}</h1>
                        <p className="text-sm text-gray-400">{userData.email}</p>
                    </div>
                </div>

                <hr className="my-4 border-gray-300" />

                {userData.role === "student" ? (
                    <div className="space-y-2">
                        <p><strong>Roll No:</strong> {userData.rollNumber}</p>
                        <p><strong>Date of Birth:</strong> {new Date(userData.dateOfBirth).toDateString()}</p>
                        <p><strong>Phone:</strong> {userData.phone}</p>
                        <p><strong>Address:</strong> {userData.address}</p>
                        <p><strong>Gender:</strong> {userData.gender}</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <p><strong>Department:</strong> {userData.department}</p>
                        <p><strong>Phone:</strong> {userData.phone}</p>
                    </div>
                )}

                <div className="mt-6 flex justify-end">
                    <button
                        className="group flex items-center justify-center w-11 h-11 bg-red-500 rounded-full hover:bg-red-600"
                        onClick={handleLogOut}
                    >
                        <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
