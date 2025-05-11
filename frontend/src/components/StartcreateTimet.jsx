import React, { useEffect, useState } from 'react'

function StartcreateTimet({ data }) {
  const [days, setDays] = useState([])
  const [classtime, setTime] = useState([])
  const [classsubject, setClassSubject] = useState([])
  useEffect(() => {
    if (data && data.length > 0) {
      setDays(data);
    }
    setTime(time)
    setClassSubject(subjects)
  }, [data]);
  const time = ["9-10", "10-11", "11-12", "12-1", "1-2"]
  const subjects = ["English","Hindi","Math","Science","GK","Game"]

  return (
    <div className=" flex justify-center  mt-6 w-full max-w-5xl">
      <table className="min-w-full backdrop-blur-md table-fixed border-collapse border border-gray-300 bg-white/10 shadow-md rounded-lg">
        <thead>
          <tr className="bg-white/30">
            <th className="border border-gray-400 px-4 py-2 text-left text-black font-semibold">Time/Day</th>
            {
              days.map((dayobj, index) => (

                <th key={index} className="border border-gray-400 px-4 py-2 text-black font-medium backdrop-blur-md">{dayobj.day}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, idx) => (
            <tr key={idx} className="hover:bg-white/20 transition">
              <td className="border border-gray-400 px-4 py-2 bg-white/20 backdrop-blur-md text-black font-medium">
                <select>
                  <option>select time </option>
                  {classtime.map((timeobj, index) => (
                    <option key={index}>{timeobj}</option>
                  ))}
                </select>
              </td>
              {Array.from({ length: 6 }).map((__, i) => (
                <td key={i} className="border border-gray-400 px-4 py-2 text-black text-center">
                 
                    <select>
                      <option>select subject</option>
                      {
                        classsubject.map((subobj,index)=>(
                          <option key={index}>{subobj}

                          </option>
                        ))
                      }

                    </select>
                    
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default StartcreateTimet

// import { useState } from "react";


// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const periods = 5; // 5 periods per day
// const classtime = ["9-10", "10-11", "11-12", "12-1", "1-2"];
// const classsubject = ["Math", "Science", "English", "History"];
// const teacherOptions = {
//   Math: ["Mr. Sharma", "Ms. Gupta"],
//   Science: ["Dr. Verma", "Ms. Roy"],
//   English: ["Ms. D'Souza", "Mr. Khan"],
//   History: ["Mr. Singh", "Ms. Jain"],
// };

// export default function StartcreateTimet() {
//   const [table, setTable] = useState(
//     Array(periods).fill().map(() => Array(days.length).fill({ time: "", subject: "", teacher: "" }))
//   );

//   const [dayCompleted, setDayCompleted] = useState(0);

//   const handleSelect = (rowIdx, colIdx, type, value) => {
//     const updated = [...table];
//     updated[rowIdx][colIdx] = {
//       ...updated[rowIdx][colIdx],
//       [type]: value,
//     };
//     setTable(updated);
//   };

//   const isCellEditable = (colIdx) => colIdx <= dayCompleted;

//   const checkDayComplete = (colIdx) => {
//     return table.every((row) => row[colIdx].time && row[colIdx].subject && row[colIdx].teacher);
//   };

//   const handleNextDay = () => {
//     if (checkDayComplete(dayCompleted)) {
//       setDayCompleted((prev) => Math.min(prev + 1, days.length - 1));
//     } else {
//       alert("Please complete all periods for the day first!");
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="border-collapse border w-full bg-white/30 backdrop-blur-md shadow-lg">
//         <thead>
//           <tr>
//             <th className="p-2 border">Time/Day</th>
//             {days.map((day) => (
//               <th key={day} className="p-2 border">{day}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: periods }).map((_, rowIdx) => (
//             <tr key={rowIdx}>
//               <td className="border p-2">
//                 <select
//                   value={table[rowIdx][0].time}
//                   onChange={(e) =>
//                     days.forEach((_, colIdx) => handleSelect(rowIdx, colIdx, "time", e.target.value))
//                   }
//                 >
//                   <option value="">select time</option>
//                   {classtime.map((t) => (
//                     <option key={t}>{t}</option>
//                   ))}
//                 </select>
//               </td>
//               {days.map((_, colIdx) => (
//                 <td key={colIdx} className="border p-2">
//                   {isCellEditable(colIdx) ? (
//                     <>
//                       <select
//                         value={table[rowIdx][colIdx].subject}
//                         onChange={(e) => handleSelect(rowIdx, colIdx, "subject", e.target.value)}
//                       >
//                         <option value="">select subject</option>
//                         {classsubject.map((s) => (
//                           <option key={s}>{s}</option>
//                         ))}
//                       </select>
//                       {table[rowIdx][colIdx].subject && (
//                         <select
//                           className="mt-2"
//                           value={table[rowIdx][colIdx].teacher}
//                           onChange={(e) => handleSelect(rowIdx, colIdx, "teacher", e.target.value)}
//                         >
//                           <option value="">select teacher</option>
//                           {(teacherOptions[table[rowIdx][colIdx].subject] || []).map((t) => (
//                             <option key={t}>{t}</option>
//                           ))}
//                         </select>
//                       )}
//                     </>
//                   ) : (
//                     <span className="text-gray-400">Locked</span>
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button
//         className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         onClick={handleNextDay}
//       >
//         Unlock Next Day
//       </button>
//     </div>
//   );
// }
