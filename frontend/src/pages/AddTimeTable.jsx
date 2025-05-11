import axios from "axios";
import { useEffect, useState } from "react";
import StartcreateTimet from "../components/StartcreateTimet";

function AddTimeTable() {
  const [selectClass, setselectClass] = useState([]);
  const [getSection, setgetSection] = useState([])
  const [selectedsectionid, setSelectedsectionid] = useState("")
  const [show, setShow] = useState(false)
  const [data, setData] = useState([])
  const baseURL = import.meta.env.VITE_API_BASE_URL;

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
  const submitsectiontimetable = async () => {

    try {
      const playload = {
        sectionId: selectedsectionid,
        days: []
      }
      const res = await axios.post(`${baseURL}timetable/create`, playload);
      console.log("TimeTime ", res.data.timetable.days);
      setShow(true)
      setData(res.data.timetable.days)
      console.log(res)
      alert(res.data.message)

    } catch (error) {
      alert(error?.response?.data?.message)
      console.log(error)
    }

  }
  useEffect(() => {
    fetchclass()
  }, [])


  return (
    <>
      <div
        style={{ backgroundImage: "url('/about.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="w-full min-h-screen flex flex-col items-center  p-30 "
      >
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl flex flex-col items-center gap-6 w-full max-w-md">
          <h1 className="text-2xl font-semibold text-white">Select the class and section</h1>

          <div className="flex flex-col gap-4 w-full">
            <select
              onChange={selectedClass}
              className="w-full p-3 bg-white/70 text-black rounded-lg focus:outline-none shadow-inner"
            >
              <option value="">Select Class</option>
              {selectClass.map((classItem) => (
                <option key={classItem._id} value={classItem._id}>
                  {classItem.className}
                </option>
              ))}
            </select>

            <select
              onClick={handlesection}
              className="w-full p-3 bg-white/70 text-black rounded-lg focus:outline-none shadow-inner"
            >
              <option value="">Select Section</option>
              {getSection.map((sectionItem) => (
                <option key={sectionItem._id} value={sectionItem._id}>
                  {sectionItem.sectionName}
                </option>
              ))}
            </select>
          </div>

          <button
            className=" p-2 px-4  bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
            onClick={submitsectiontimetable}
          >
            Start
          </button>

        </div>
        {show && <StartcreateTimet data={data} />}
      </div>

    </>
  );
}

export default AddTimeTable;
