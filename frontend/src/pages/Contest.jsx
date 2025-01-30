import { useContext } from "react"
import { Context } from "../main"

function Contest() {
  const { darkMode } = useContext(Context);

  return (
    <>
      <div className={`w-full min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"} text-white p-6`}>
        <h1 className={`text-3xl font-bold text-center ${darkMode ? "text-teal-400" : "text-teal-600"}`}>Contest Information</h1>
        
        <div className="mt-8">
          <div className={`p-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-md shadow-md`}>
            <h2 className="text-xl font-semibold">Upcoming Contest</h2>
            <p className="mt-2">Date: 25th February 2025</p>
            <p>Duration: 2 hours</p>
            <p className="mt-4">Description: This contest will test your problem-solving and coding skills across various domains.</p>
          </div>
        </div>
        
        <hr className={`w-full h-[1px] ${darkMode ? "text-white" : "text-black"} my-8`} />

        {/* Previous Contests */}
        <div className={`p-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-md shadow-md`}>
          <h2 className="text-xl font-semibold">Previous Contests</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span>Contest 1</span>
              <span>Completed</span>
            </li>
            <li className="flex justify-between">
              <span>Contest 2</span>
              <span>Completed</span>
            </li>
            <li className="flex justify-between">
              <span>Contest 3</span>
              <span>Completed</span>
            </li>
          </ul>
        </div>
      </div>
    </>
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
