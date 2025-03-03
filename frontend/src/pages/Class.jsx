import { useEffect, useState } from "react";
import axios from "axios";

function StudentPage() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/class/getclass",  
        { withCredentials: true }
      );
      setStudents(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching students:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen mt-18 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">🎓 Student List</h2>

        {students.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {students.map((student) => (
              <div
                key={student._id}
                className="p-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold">{student.name}</h3>

                <div className="mt-3 space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    🎓 <strong>Roll No:</strong> {student.rollNumber}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    ✉️ <strong>Email:</strong> {student.email}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    📅 <strong>DOB:</strong> {new Date(student.dateOfBirth).toLocaleDateString()}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    📞 <strong>Phone:</strong> {student.phone}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    🏠 <strong>Address:</strong> {student.address}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    ⚡ <strong>Gender:</strong> {student.gender}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    🕒 <strong>Registered:</strong> {new Date(student.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            ❌ No students found
          </p>
        )}
      </div>
    </div>
  );
}

export default StudentPage;
