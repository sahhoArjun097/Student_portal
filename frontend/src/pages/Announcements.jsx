import { useContext } from "react"
import { Context } from "../main"
const Announcements = () => {

    const { darkMode } = useContext(Context)
    const announcements = [
        {
            id: "1",
            title: "🚀 New Course Launched!",
            description: "We have introduced a new course on Machine Learning. Enroll now to start learning!",
            date: "2025-02-01",
        },
        {
            id: "2",
            title: "📅 Exam Schedule Released",
            description: "The final exam timetable for this semester has been published. Check the portal for details.",
            date: "2025-02-05",
        },
        {
            id: "3",
            title: "🎉 Hackathon Registration Open",
            description: "Join the upcoming coding hackathon and win exciting prizes. Registration closes soon!",
            date: "2025-02-10",
        },
        {
            id: "4",
            title: "📢 System Maintenance Notice",
            description: "The portal will be down for maintenance on Feb 15 from 12 AM to 6 AM. Plan accordingly.",
            date: "2025-02-15",
        },
    ];

    return (
        <>
            <div className={`min-h-screen ${darkMode ?"bg-gray-900":"bg-white"} text-white w-full p-7`}>
                <h1 className={`text-3xl font-bold text-center ${darkMode?"text-white":"text-gray-950"} mb-8`}>📢 Announcements</h1>

                <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {announcements.map((announcement) => (
                        <div
                            key={announcement.id}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105"
                        >
                            <h2 className="text-xl font-semibold text-teal-400 mb-2">
                                {announcement.title}
                            </h2>
                            <p className="text-gray-300 text-sm">{announcement.description}</p>
                            <p className="text-xs text-gray-500 mt-4">
                                📅 {new Date(announcement.date).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <hr className={` w-full h-[1px] ${darkMode ? "text-white" : "text-black"}`} />
        </>
    );
};

export default Announcements;


//   import { useEffect, useState } from "react";
// import axios from "axios";

// interface Announcement {
//   id: string;
//   title: string;
//   description: string;
//   date: string;
// }

// const Announcements = () => {
//   const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://your-backend-api.com/announcements") // Replace with your actual API
//       .then((response) => {
//         setAnnouncements(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching announcements:", error);
//         setError("Failed to load announcements.");
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
//       <h1 className="text-3xl font-bold text-center mb-8">📢 Announcements</h1>

//       {loading ? (
//         <p className="text-center text-gray-400">Loading...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : (
//         <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {announcements.map((announcement) => (
//             <div
//               key={announcement.id}
//               className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105"
//             >
//               <h2 className="text-xl font-semibold text-teal-400 mb-2">
//                 {announcement.title}
//               </h2>
//               <p className="text-gray-300 text-sm">{announcement.description}</p>
//               <p className="text-xs text-gray-500 mt-4">
//                 📅 {new Date(announcement.date).toLocaleDateString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Announcements;
