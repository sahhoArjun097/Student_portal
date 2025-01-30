// import { useState, useEffect } from "react";
// import axios from "axios";

// const Assignments = () => {
//   const [assignments, setAssignments] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     axios
//       .get("http://your-backend-url/assignments")
//       .then((response) => {
//         setAssignments(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching assignments", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="text-center text-teal-400">Loading assignments...</div>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white px-6 py-12">
//       <h1 className="text-3xl font-bold text-center mb-8 text-teal-400">📚 Assignments</h1>

//       <div className="w-full max-w-5xl mx-auto">
//         {assignments.length === 0 ? (
//           <div className="text-center text-red-400">No assignments available.</div>
//         ) : (
//           <div className="space-y-6">
//             {assignments.map((assignment, index) => (
//               <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
//                 <h2 className="text-xl font-semibold">{assignment.subject}</h2>
//                 <p className="text-sm">Teacher: {assignment.teacher}</p>
//                 <p className="mt-2">{assignment.description}</p>
//                 <p className="mt-2">Deadline: {new Date(assignment.deadline).toLocaleString()}</p>
//                 {assignment.fileUrl && (
//                   <a href={assignment.fileUrl} className="text-teal-400 mt-4 block">
//                     Download Assignment
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Assignments;

import { useContext } from "react"
import { Context } from "../main"
import React from "react";

const Assignments = () => {
     const { darkMode } = useContext(Context)
  const assignments = [
    {
      subject: "Mathematics",
      teacher: "Dr. John Doe",
      description: "Solve the problems on derivatives from Chapter 5.",
      deadline: "2025-02-15T23:59:59",
      fileUrl: "https://example.com/assignment1.pdf",
    },
    {
      subject: "Physics",
      teacher: "Prof. Jane Smith",
      description: "Complete the lab report on Newton's Laws of Motion.",
      deadline: "2025-02-20T23:59:59",
      fileUrl: "https://example.com/assignment2.pdf",
    },
    {
      subject: "Computer Science",
      teacher: "Dr. Alan Turing",
      description: "Implement a basic algorithm in your preferred language.",
      deadline: "2025-02-18T23:59:59",
      fileUrl: "https://example.com/assignment3.pdf",
    },
  ];

  return (
      <>
    <div className="w-full min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-400">📚 Assignments</h1>

      <div className="w-full max-w-5xl mx-auto">
        {assignments.length === 0 ? (
          <div className="text-center text-red-400">No assignments available.</div>
        ) : (
          <div className="space-y-6">
            {assignments.map((assignment, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">{assignment.subject}</h2>
                <p className="text-sm">Teacher: {assignment.teacher}</p>
                <p className="mt-2">{assignment.description}</p>
                <p className="mt-2">Deadline: {new Date(assignment.deadline).toLocaleString()}</p>
                {assignment.fileUrl && (
                  <a href={assignment.fileUrl} className="text-teal-400 mt-4 block">
                    Download Assignment
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <hr className={` w-full h-[1px] ${darkMode ? "text-white" : "text-black"}`} />
    </>
  );
};

export default Assignments;

