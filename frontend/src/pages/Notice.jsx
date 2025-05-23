import { useEffect, useState } from "react";
import axios from "axios";

function Notice() {
  const [notices, setNotices] = useState([]);

  const fetchNotices = async () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    try {
      const { data } = await axios.get(
        `${baseURL}notice/getallNotice`,
        { withCredentials: true }
      );
      setNotices(data.notice);
      // console.log(data.notice)
    } catch (error) {
      console.error("No notices are coming", error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 w-full mt-18  dark:text-white p-6 bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: "url('/notice.png')" }}>
      <div className="max-w-4xl mx-auto"> 
        <h2 className="text-3xl font-bold mb-6 text-center">📢 Latest Notices</h2>

        {notices.length > 0 ? (
          <div className="space-y-6">
            {notices.map((n) => (
              <div
                key={n._id}
                className="p-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold">{n.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {n.description}
                </p>
                <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex gap-4 "> 
                  <p>📅 {n.updatedAt.substring(0,9)} </p>
                  <p> AT - {n.updatedAt.substring(11,16) }</p>
                    </div>
                  <p>📝 Issued By: <span className="font-medium">{n.issuedBy}</span></p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            ❌ No notices available
          </p>
        )}
      </div>
    </div>
  );
}

export default Notice;
