import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GetStudent() {
  const [getClass, setGetClass] = useState([]);
  const [getSection, setGetSection] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  // Fetch Classes
  const fetchClass = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/class/getclass", { withCredentials: true });
      setGetClass(data.classes);
      console.log(data.classes)
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  useEffect(() => {
    fetchClass();
  }, []);

  // Update Sections based on selected class
  // useEffect(() => {
  //   if (selectedClass) {
  //     const selectedCls = getClass.find(cls => cls._id === selectedClass);
  //     setGetSection(selectedCls ? selectedCls.sections : []);
  //   }
  // }, [selectedClass, getClass]);
  

  return (
    <div className="w-full min-h-screen mt-18 flex bg-gray-800 p-4 flex-col">
      <div className="w-full h-full justify-center items-center flex gap-6 p-5 bg-amber-400">
        
        {/* Class Selection */}
        <div>
          <label className="block mb-2">Class:</label>
          <select
            className="p-2 w-50 bg-gray-800 border border-gray-600 rounded"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select Class</option>
            {getClass.map((cls) => (
              <option key={cls._id} value={cls.id}>{cls.className}</option>
            ))}
          </select>
        </div>

        {/* Section Selection */}
        <div>
          <label className="block mb-2">Section:</label>
          <select
            className="p-2 w-50 bg-gray-800 border border-gray-600 rounded"
            onChange={(e) => setSelectedSection(e.target.value)}
     // Disable until a class is selected
          >
            <option value="">Select Section</option>
            {getSection.map((section) => (
              <option key={section._id} value={section.sectionName}>{section.sectionName}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}

export default GetStudent;
