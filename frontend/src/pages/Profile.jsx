import { useContext } from "react";
import { Context } from "../main";

function Profile() {
  const { darkMode } = useContext(Context);

  return (
    <div
      className={`min-h-screen w-full flex justify-center bg-cover bg-center bg-no-repeat items-center ${
        darkMode ? "bg-[#09090b] text-white" : "bg-gray-100 text-black"
      }`}
      style={{ backgroundImage: "url('/profilebg.jpg')" }}
    //   style={{ height: "100vh" }}
    >
      <div
        className={`max-w-3xl w-full h-auto rounded-2xl shadow-lg p-6 ${
          darkMode ? "bg-opacity-0 backdrop-blur-xl" : "bg-opacity-0 backdrop-blur-xl"
        }`}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">Arjun Agarwal</h1>
            <p className="text-sm md:text-base text-gray-400">
              Roll No: 2100820100044
            </p>
            <p className="text-sm md:text-base text-gray-400">
              Course: B.Tech (Computer Science)
            </p>
            <p className="text-sm md:text-base text-gray-400">
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
            className={`px-4 py-2 rounded-md font-medium ${
              darkMode
                ? "bg-indigo-600 hover:bg-indigo-500"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            Edit Profile
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-300 text-black hover:bg-gray-200"
            }`}
          >
            View Academics
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
