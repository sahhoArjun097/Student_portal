import { useEffect, useState, useContext } from "react";
import { Context } from "../main";

function Contest() {
  const { darkMode } = useContext(Context);
  const [contests, setContests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/contest/getallcontest")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContests(data.contest);
        }
      })
      .catch((error) => console.error("Error fetching contests:", error));
  }, []);

  return (
    <div
      className={`w-full min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } p-6 flex flex-col items-center`}
    >
      <h1
        style={{ textShadow: "0px 0px 12px rgba(255, 255, 0, 0.8)" }}
        className="text-5xl font-bold text-center"
      >
        Upcoming Contests
      </h1>

      {/* Contest Grid */}
      <div className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contests.length > 0 ? (
          contests.map((contest) => (
            <div
              key={contest._id}
              className={`p-5 rounded-lg shadow-lg border-2 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              } flex flex-col items-center`}
            >
              {/* Image Box (2:3 Ratio) */}
              <div className="w-full h-48 md:h-64 flex items-center justify-center">
                <img
                  src={contest.contestImage.url}
                  alt={contest.title}
                  className="w-full h-full object-cover rounded-md"
                  style={{ aspectRatio: "2/3" }}
                />
              </div>

              <h2 className="text-2xl font-semibold mt-4">{contest.title}</h2>
              <p className="text-lg mt-2">{contest.description}</p>
              <p className="text-sm mt-2 text-gray-400">
                <strong>Date:</strong> {new Date(contest.registrationDate).toDateString()}
              </p>
              <a
                href={contest.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
              >
                Register Now
              </a>
            </div>
          ))
        ) : (
          <p className="text-lg mt-4">No upcoming contests found.</p>
        )}
      </div>
    </div>
  );
}

export default Contest;
