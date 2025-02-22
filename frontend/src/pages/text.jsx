import React, { useEffect, useState } from "react";
import axios from "axios";

function ClassSelector() {
  const [allClass, setAllClass] = useState([]);  // Stores classes
  const [sections, setSections] = useState([]);  // Stores sections of selected class
  const [selectedClassId, setSelectedClassId] = useState("");
  const [selectedSectionId, setSelectedSectionId] = useState("");

  // Mock API Data for Testing
  const getAllClass = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/class/getclass", {
        withCredentials: true
      });
      console.log(data.classes);
      setAllClass(data.classes); 
    } catch (error) {
      console.error("Error fetching class data:", error);
    }
  };

  // Simulated API Fetching
  // const getAllClass = async () => {
  //   try {
  //     setTimeout(() => {
  //       console.log("Mock API Response:", mockData);
  //       setAllClass(mockData.classes);
  //     }, 1000);
  //   } catch (error) {
  //     console.error("Error fetching class data:", error);
  //   }
  // };

  useEffect(() => {
    getAllClass();
  }, []);

  // Handle class selection change
  const handleClassChange = (e) => {
    const selectedId = e.target.value;
    setSelectedClassId(selectedId); // ✅ Corrected
    
    // Find the selected class and update sections
    const selectedClass = allClass.find(cls => cls._id === selectedId);
    setSections(selectedClass ? selectedClass.sections : []);
    console.log(selectedClass)
    setSelectedSectionId(""); // Reset section selection
  };
  
  // Handle section selection change
  const handleSectionChange = (e) => {
    setSelectedSectionId(e.target.value);
  };

  // Handle form submission (Mocked)
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting ", );

    setTimeout(() => {
      alert(` successfully!`);
    }, 500);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg">
        {/* Class Selection */}
        <label className="text-white font-semibold">Select a Class:</label>
        <select
          value={selectedClassId}
          onChange={handleClassChange}
          className="w-full p-2 rounded bg-gray-600 text-white mt-2"
          required
        >
          <option value="">Choose a class</option>
          {allClass.map((classItem) => (
            <option key={classItem._id} value={classItem._id}>
              {classItem.className}
            </option>
          ))}
        </select>

        {/* Section Selection (Visible Only if Class is Selected) */}
        {selectedClassId && (
          <>
            <label className="text-white font-semibold mt-4">Select a Section:</label>
            <select
              value={selectedSectionId}
              onChange={handleSectionChange}
              className="w-full p-2 rounded bg-gray-600 text-white mt-2"
              required
            >
              <option value="">Choose a section</option>
              {sections.map((section) => (
                <option key={section._id} value={section._id}>
                  {section.sectionName}
                </option>
              ))}
            </select>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          disabled={!selectedSectionId} // Disable if no section is selected
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ClassSelector;
