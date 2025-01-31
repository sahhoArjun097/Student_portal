import { useContext } from "react";
import { Context } from "../main";

function Contest() {
  const { darkMode } = useContext(Context);

  return (
    <div className={`w-full min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} p-6 flex flex-col items-center`}>
      <h1
        style={{ textShadow: "0px 0px 12px rgba(255, 255, 0, 0.8)" }}
        className="text-5xl font-bold text-center"
      >
        Contest Information
      </h1>

      {/* Upcoming Contest */}
      <div className="mt-8 w-full max-w-3xl grid gap-6">
        <div className={`p-6 rounded-lg shadow-lg border-2 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
          <h2 className="text-2xl font-semibold">Upcoming Contest</h2>
          <p className="mt-2 text-lg"><strong>Date:</strong> 25th February 2025</p>
          <p className="text-lg"><strong>Duration:</strong> 2 hours</p>
          <p className="mt-4">This contest will test your problem-solving and coding skills across various domains.</p>
        </div>
      </div>

      {/* Previous Contests */}
      <div className="mt-8 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Contest 1", "Contest 2", "Contest 3"].map((contest, index) => (
          <div
            key={index}
            className={`p-5 rounded-lg shadow-lg border-2 flex flex-col items-center ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
          >
            <h3 className="text-xl font-semibold">{contest}</h3>
            <span className="mt-2 text-green-500 font-medium">Completed</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contest;



// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { Context } from "../context/Context";

// function Contest() {
//   const { darkMode } = useContext(Context);
//   const [contests, setContests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContests = async () => {
//       try {
//         const response = await axios.get("/api/contests"); // Replace with your backend API
//         setContests(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch contest data");
//         setLoading(false);
//       }
//     };

//     fetchContests();
//   }, []);

//   if (loading) {
//     return (
//       <div className={`w-full min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"} text-white p-6`}>
//         <p className="text-center text-lg">Loading contests...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={`w-full min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"} text-white p-6`}>
//         <p className="text-center text-lg text-red-500">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className={`w-full min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"} text-white p-6`}>
//         <h1 className={`text-3xl font-bold text-center ${darkMode ? "text-teal-400" : "text-teal-600"}`}>Contest Information</h1>
        
//         {/* Upcoming Contest */}
//         {contests.length > 0 ? (
//           contests.map((contest, index) => (
//             <div className="mt-8" key={index}>
//               <div className={`p-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-md shadow-md`}>
//                 <h2 className="text-xl font-semibold">{contest.name}</h2>
//                 <p className="mt-2">Date: {contest.date}</p>
//                 <p>Duration: {contest.duration} hours</p>
//                 <p className="mt-4">{contest.description}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-lg text-gray-500">No upcoming contests.</p>
//         )}

//         <hr className={`w-full h-[1px] ${darkMode ? "text-white" : "text-black"} my-8`} />

//         {/* Previous Contests */}
//         <div className={`p-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-md shadow-md`}>
//           <h2 className="text-xl font-semibold">Previous Contests</h2>
//           <ul className="mt-4 space-y-2">
//             {contests.length > 0 ? (
//               contests.map((contest, index) => (
//                 <li key={index} className="flex justify-between">
//                   <span>{contest.name}</span>
//                   <span>{contest.status}</span>
//                 </li>
//               ))
//             ) : (
//               <li className="text-gray-500">No previous contests available.</li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contest;
