import axios from 'axios'
import { use } from 'react'
import { useEffect, useState } from 'react'

function StartcreateTimet({ classday, classofteachers, selectedsectionid }) {
  const [selectedtime, setSelectedtime] = useState("")
  const [selectedsubject, setSelectedsubject] = useState("")
  const [selectedteacher, setSelectedteacher] = useState("")
  const [days, setDays] = useState([])
  const [classtime, setTime] = useState([])
  const [classsubject, setClassSubject] = useState([])
  const [teacher, setTeachers] = useState([])
  const [subjectteacher, setSubjectteacher] = useState([])
  const [day, setDay] = useState("")
  const [timetable, setTimetable] = useState("")
  const baseURL = import.meta.env.VITE_API_BASE_URL

  const fetchteacher = async () => {
    const { data } = await axios.get(`${baseURL}class/class/${classofteachers}`, {
      withCredentials: true
    })
    const teachername = data.class.teachers
    setTeachers(teachername)
    console.log(data)
  }
  const fetchsection = async () => {
    const { data } = await axios.get(`${baseURL}section/getsectionbyid/${selectedsectionid}`, {
      withCredentials: true
    })
    // console.log(data)
    setTimetable(data.section.timetable)

  }
  const submittimetabledata = async () => {
    try {
      const res = await axios.put(`${baseURL}timetable/updatep/${timetable}/${day}`, {
        time: selectedtime,
        subject: selectedsubject,
        teacher: selectedteacher
      }, {
        withCredentials: true
      })
      alert(res.data.message)
      fetchtimetable()
      
    } catch (error) {
      alert(error.response.data.message)
    }
    
  }
  const fetchtimetable = async () =>{
    const {data} = await axios.get(`${baseURL}timetable/allttbyid/${timetable}`,{
      withCredentials:true
    })
    console.log(data)
  }
  
  useEffect(() => {
    if (classday) {
      setDays(classday);
      fetchteacher()
    }
    fetchtimetable
    fetchsection()
    setTime(time)
    setClassSubject(subjects)
  }, [classday]);


  const time = ["9-10", "10-11", "11-12", "12-1", "1-2"]
  const handledaystosend = (e) => {
    const selectedday = e.target.value
    setDay(selectedday)
  }
  const handlesubject = (e) => {
    const seesubject = e.target.value;
    setSelectedsubject(seesubject)
    const selectedsubjectteacher = teacher.filter(t => t.department === seesubject)
    console.log(selectedsubjectteacher)
    setSubjectteacher(selectedsubjectteacher)
  

  }
  // const 
  const subjects = ["English", "Hindi", "Math", "Science", "GK", "Game"]

  return (
    <div className=" flex flex-col justify-center items-center  mt-3 w-full max-w-5xl">
      <div className="w-full h-full p-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center rounded-xl ">
        <div className="flex flex-col w-full md:w-1/5">
          <label className="text-sm font-semibold text-gray-600 mb-1">Day</label>
          <select onClick={handledaystosend} className="border border-black rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select the day</option>
            {days.map((dayobj, index) => (
              <option key={index} value={dayobj._id}>{dayobj.day}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full md:w-1/5">
          <label className="text-sm font-semibold text-gray-600 mb-1">Time</label>
          <select onChange={(e) => setSelectedtime(e.target.value)} className="border border-black rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select the time</option>
            {classtime.map((timeobj, index) => (
              <option key={index}>{timeobj}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/5">
          <label className="text-sm font-semibold text-gray-600 mb-1">Subject</label>
          <select
            //  onChange={(e) => setSelectedsubject(e.target.value)}
            onClick={handlesubject} className="border border-black rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select the subject</option>
            {classsubject.map((subobj, index) => (
              <option key={index}>{subobj}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full md:w-1/5">
          <label className="text-sm font-semibold text-gray-600 mb-1">Teacher</label>
          <select onChange={(e) => setSelectedteacher(e.target.value)} className="border border-black rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select the teacher</option>
            {subjectteacher.map((teacherobj, index) => (
              <option key={index} value={teacherobj._id}>{teacherobj.name}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-center md:items-end w-full md:w-auto">
          <button onClick={submittimetabledata} className="bg-blue-600 text-white font-semibold px-6 py-2 mt-6 rounded-xl hover:bg-blue-700 transition-all duration-200">
            Submit
          </button>
        </div>
      </div>
      <table className="min-w-full backdrop-blur-md table-fixed border-collapse border border-gray-300 bg-white/10 shadow-md rounded-lg">
        <thead>
          <tr className="bg-white/30">
            <th className="border border-gray-400 px-4 py-2 text-left text-black font-semibold">Time/Day</th>
            {
              days.map((dayobj, index) => (

                <th key={index} className="border border-gray-400 px-4 py-2 text-black font-medium backdrop-blur-md">{dayobj.day}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, idx) => (
            <tr key={idx} className="hover:bg-white/20 transition">
              <td className="border border-gray-400 px-4 py-2 bg-white/20 backdrop-blur-md text-black font-medium">
                
              </td>
              {Array.from({ length: 6 }).map((__, i) => (
                <td key={i} className="border border-gray-400 px-4 py-2 text-black text-center">
                 
                    
                    
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default StartcreateTimet

