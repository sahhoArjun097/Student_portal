import axios from "axios";
import React, { useEffect, useState } from "react";

function GetStudent() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [getClass, setGetClass] = useState([]);
  const [getSection, setGetSection] = useState([]);
  const [studentIds, setStudentIds] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  // Fetch Classes
  const fetchClass = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}class/getclass`,
        { withCredentials: true }
      );
      setGetClass(data.classes);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  useEffect(() => {
    fetchClass();
  }, []);

  // Update Sections based on selected class
  useEffect(() => {
    if (selectedClass) {
      const selectedCls = getClass.find((cls) => cls._id === selectedClass);
      setGetSection(selectedCls ? selectedCls.sections : []);
      setSelectedSection(""); // Reset section when class changes
      setStudentIds([]); // Reset students
    }
  }, [selectedClass, getClass]);

  // Get Student IDs when both class and section are selected
  useEffect(() => {
    if (selectedClass && selectedSection) {
      const selectedCls = getClass.find((cls) => cls._id === selectedClass);
      if (selectedCls) {
        const selectedSec = selectedCls.sections.find(
          (sec) => sec._id === selectedSection
        );
        setStudentIds(selectedSec ? selectedSec.students : []);
      }
    }
  }, [selectedClass, selectedSection]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-800 p-4">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 p-5 bg-amber-400">
        {/* Class Selection */}
        <div>
          <label className="block mb-2 text-gray-900 font-semibold">Class:</label>
          <select
            className="p-2 w-60 bg-gray-800 border border-gray-600 rounded text-white"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select Class</option>
            {getClass.map((cls) => (
              <option key={cls._id} value={cls._id}>
                {cls.className}
              </option>
            ))}
          </select>
        </div>

        {/* Section Selection */}
        <div>
          <label className="block mb-2 text-gray-900 font-semibold">Section:</label>
          <select
            className="p-2 w-60 bg-gray-800 border border-gray-600 rounded text-white"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            disabled={!selectedClass}
          >
            <option value="">Select Section</option>
            {getSection.map((section) => (
              <option key={section._id} value={section._id}>
                {section.sectionName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Student IDs */}
      {studentIds.length > 0 && (
        <div className="mt-6 p-4 bg-gray-900 text-white rounded-lg">
          <h2 className="text-xl font-bold mb-4">Student IDs</h2>
          <ul className="list-disc pl-6">
            {studentIds.map((id) => (
              <li key={id} className="text-lg">{id}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GetStudent;
