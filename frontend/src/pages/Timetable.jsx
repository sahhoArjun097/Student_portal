import { useContext } from "react"
import { Context } from "../main"
const Timetable = () => {
      const { darkMode } = useContext(Context)
    const timetable = [
      { time: "9:00 AM - 10:00 AM", lecture: "Mathematics", teacher: "Dr. Sharma" },
      { time: "10:15 AM - 11:15 AM", lecture: "Physics", teacher: "Prof. Verma" },
      {  time: "11:15 AM - 12:15 PM", lecture: "Computer Science", teacher: "Mr. Rakesh" },
      { time: "12:15 AM - 1:15 AM", lecture: "Chemistry", teacher: "Dr. Rao" },
      {  time: "1:30 AM - 2:30 PM", lecture: "English", teacher: "Ms. Kavita" },
    //   { time: "12:45 PM - 1:45 PM", lecture: "Biology", teacher: "Dr. Gupta" },
    ];
  
    return (
        <>
      <div className={`w-full min-h-screen ${darkMode ? "bg-gray-900":"bg-white"} text-white px-6 py-12 flex flex-col items-center`}>
        <h1 className="text-3xl font-bold text-center mb-8 text-teal-400">📅 Todays Timetable</h1>
  
        <div className="w-full max-w-5xl overflow-x-auto">
          <table className="w-full border border-gray-700 shadow-lg">
            <thead>
              <tr className="bg-gray-800 text-teal-400">
                {/* <th className={` p-4 text-left`}>📆 Day</th> */}
                <th className="p-4 text-left">⏰ Time</th>
                <th className="p-4 text-left">📖 Lecture</th>
                <th className="p-4 text-left">👩‍🏫 Teacher</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((entry, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-800  transition-all"
                >
                  {/* <td className={`${darkMode?"text-white":"text-gray-600"} p-4`}>{entry.day}</td> */}
                  <td className={`${darkMode?"text-white":"text-gray-600"} p-4`}>{entry.time}</td>
                  <td className="p-4 text-teal-300">{entry.lecture}</td>
                  <td className={`${darkMode?"text-white":"text-gray-600"} p-4`}>{entry.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr className={` w-full h-[1px] ${darkMode ? "text-white" : "text-black"}`} />
      </>
    );
  };
  
  export default Timetable;
  


//   import { useState, useEffect } from "react";
// import axios from "axios";

// const Timetable = () => {
//   const [timetable, setTimetable] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     // Replace with your backend endpoint
//     axios
//       .get("https://your-backend-api.com/timetable") 
//       .then((response) => {
//         setTimetable(response.data); // Assume response.data contains the timetable
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to load timetable data");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="text-center text-teal-400">Loading timetable...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-400">{error}</div>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-center mb-8 text-teal-400">📅 Weekly Timetable</h1>

//       <div className="w-full max-w-5xl overflow-x-auto">
//         <table className="w-full border border-gray-700 shadow-lg">
//           <thead>
//             <tr className="bg-gray-800 text-teal-400">
//               <th className="p-4 text-left">📆 Day</th>
//               <th className="p-4 text-left">⏰ Time</th>
//               <th className="p-4 text-left">📖 Lecture</th>
//               <th className="p-4 text-left">👩‍🏫 Teacher</th>
//             </tr>
//           </thead>
//           <tbody>
//             {timetable.map((entry, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-gray-700 hover:bg-gray-800 transition-all"
//               >
//                 <td className="p-4">{entry.day}</td>
//                 <td className="p-4">{entry.time}</td>
//                 <td className="p-4 text-teal-300">{entry.lecture}</td>
//                 <td className="p-4">{entry.teacher}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Timetable;
