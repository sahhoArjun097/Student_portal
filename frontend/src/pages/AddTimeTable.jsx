import axios from "axios";
import { useEffect, useState } from "react";

function AddTimeTable() {
  const [selectClass, setselectClass] = useState([]);
  const [getSection, setgetSection] = useState([])
  const [selectedsectionid,setSelectedsectionid] = useState("")
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const addtimetable = async () => {
    try {
      const res = await axios.post(`${baseURL}timetable/create`)

    } catch (error) {
      console.log(error)

    }


  }
  const fetchclass = async () => {
    try {
      const { data } = await axios.get(`${baseURL}class/getclass`, {
        withCredentials: true
      });
      console.log(data.classes);
      setselectClass(data.classes);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const selectedClass = (e) => {
    const id = e.target.value
    const selectclassSection = selectClass.find(cls => cls._id === id)
    setgetSection(selectclassSection?.sections)
    console.log(selectclassSection.sections)
  }

  const handlesection = (e) => {
    const sectionid = e.target.value
    setSelectedsectionid(sectionid)
    
  }
const submitsectiontimetable = async () =>{

  try {
    const playload = {
      sectionId : selectedsectionid,
      days:[]
    }
    const res = await axios.post(`${baseURL}timetable/create`,playload);
    console.log("tti,",res.data);

  } catch (error) {
    console.log(error)

  }

}
  useEffect(() => {
    fetchclass()
  }, [])


  return (
    <>
      <div className=" flex-col justify-between  flex min-h-screen mt-10 p-10 items-center">
          <h1 className="text-xl">Select the class and section </h1>
        <div className=" flex gap-7 ">
          <select onChange={selectedClass} className="w-full  p-2 border rounded">
            <option value="" >
              Select Class
            </option>

            {selectClass.map((classItem) => (
              <option key={classItem._id} value={classItem._id}>
                {classItem.className}

              </option>
            ))}
          </select>
          <select onClick={handlesection} className="w-full  p-2  border rounded">
            <option value="">
              select section
            </option>
            {getSection.map((sectionItem) => (
              <option key={sectionItem._id} value={sectionItem._id}>
                {sectionItem.sectionName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="border p-2 rounded-2xl" onClick={submitsectiontimetable}>submit</button>
        </div>

        <div className="w-full  flex justify-center items-center bg-gray-100 p-4">
          <table className="border border-black table-fixed text-center w-full max-w-7xl mx-auto">
            <thead>
              <tr>
                <th className="border border-black px-6 py-4 w-40">Time/Day</th>
                <th className="border border-black px-6 py-4 w-40"></th>
                <th className="border border-black px-6 py-4 w-40"></th>
                <th className="border border-black px-6 py-4 w-40"></th>
                <th className="border border-black px-6 py-4 w-40"></th>
                <th className="border border-black px-6 py-4 w-40"></th>
                <th className="border border-black px-6 py-4 w-40"></th>

              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 7 }).map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-black px-6 py-4 h-16"
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
}

export default AddTimeTable;
