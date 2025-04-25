import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Timetable = () => {

  const [items, setItems] = useState([]);
  const [days, setDays] = useState([])
  const userData = useSelector((state) => state.authSlice.userData.user);
  const usersectionId = userData.sectionId
  const fetchAllData = async () => {
    try {
      const sectionRes = await axios.get(`http://localhost:4000/api/v1/section/getsectionbyid/${usersectionId}`);
      const section = sectionRes.data.section;
      setItems(section);
      const timetableId = section.timetable;
      const { data } = await axios.get(`http://localhost:4000/api/v1/timetable/allttbyid/${timetableId}`);
      setItems(data.TimeTable.days)
      const alldays = data.TimeTable.days.map((dayobj => dayobj.day))
      setDays(alldays)
    } catch (error) {
      console.error("Error fetching section or timetable:", error);
    }
  };
  useEffect(() => {
    if (usersectionId) {
      fetchAllData();
    }
  }, [usersectionId]);
  return (
    <>
      {/* <div className="w-full  mt-18 min-h-screen  bg-gray-900 bg-blend-soft-light bg-cover bg-center bg-no-repeat text-white px-6 py-12 flex flex-col items-center"
        style={{ backgroundImage: "url('/timetabil.png')" }}>
        <div className="w-40 h-40 bg-pink-500">
          {
            days.map((dayobj, index) => (
              <div key={index}>
                <h1>{dayobj}</h1>
              </div>
            ))
          }
          <h1>

          </h1>

        </div> */}


      {/* </div> */}
      <div className="w-full  mt-18 min-h-screen  bg-gray-900 bg-blend-soft-light bg-cover bg-center bg-no-repeat text-white px-6 py-12 flex flex-col items-center"
        style={{ backgroundImage: "url('/timetabil.png')" }}>
        <h1 className=" text-4xl md:text-7xl font-bold text-center p-9 text-black"
          style={{ textShadow: "0px 0px 17px rgba(255, 255, 0, 0.9)", }}>
          Time Tabile
        </h1>

        <div className="w-full max-w-5xl overflow-x-auto">
          <table className="w-full border border-gray-700 shadow-lg">
            <thead>
              <tr className="bg-gray-800 text-teal-400">

                <th className={` p-4 text-left`}>📆 Day</th>
                <th className="p-4 text-left">⏰ Time</th>
                <th className="p-4 text-left">📖 Lecture</th>
                <th className="p-4 text-left">👩‍🏫 Teacher</th>
              </tr>
            </thead>
            <tbody>


              <tr className="border-b  border-gray-700 bg-gray-600 hover:bg-gray-800  transition-all">
                {
                  days.map((dayobj, index) => (

                    <td key={index} className={`text-white":"text-gray-600 flex flex-col p-4`}>{dayobj}</td>

                  ))
                }
                {

                <td className="text-white p-4"></td>
                }
                <td className="p-4 text-teal-300"></td>
                <td className="text-white p-4"></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <hr className=" w-full h-[1px] text-white" />
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
