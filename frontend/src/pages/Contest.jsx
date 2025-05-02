import { useEffect, useState, useContext } from "react";
import { Context } from "../main";
import axios from "axios";

function Contest() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const { darkMode } = useContext(Context);
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchContest = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}contest/getallcontest`,
        { withCredentials: true }
      );
      setContests(data.contest);
      setLoading(false);
    } catch (error) {
      console.error("No Contest are coming", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchContest();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-solid"></div>
      </div>
    );
  }

  return (
    <div className={` mt-16 w-full min-h-screen p-6 flex flex-col items-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h1
        className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Upcoming Contests
      </h1>
      <p className="text-lg text-gray-400 mt-2 text-center">
        Discover and register for the latest competitions, hackathons, and events.
      </p>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search contests..."
        className="mt-4 px-4 py-2 w-full max-w-lg rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/* Contest Grid */}
      <div className="mt-6 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contests.filter(c => c.title.toLowerCase().includes(search.toLowerCase())).length > 0 ? (
          contests.filter(c => c.title.toLowerCase().includes(search.toLowerCase())).map((contest) => (
            <div
              key={contest._id}
              className={`p-5 rounded-lg shadow-lg border-2 transition-transform transform hover:scale-105 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
            >
              {/* Image Box */}
              <div className="w-full h-44 flex items-center justify-center">
                <img
                  src={contest.contestImage.url}
                  alt={contest.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4 uppercase text-center">{contest.title}</h2>
              <p className="text-md mt-2 text-center">{contest.description}</p>
              <p className="text-sm mt-2 text-gray-400 text-center">
                <strong>Date:</strong> {new Date(contest.registrationDate).toDateString()}
              </p>
              <div className="flex justify-center">
                <a
                  href={contest.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Register Now
                </a>
              </div>
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