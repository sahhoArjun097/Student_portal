import axios from 'axios'
import { use } from 'react'
import { useEffect, useState } from 'react'

function StartcreateTimet({ classday, classofteachers, selectedsectionid ,timetableId}) {
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
  const [showtime,setShowtime] = useState([])
  const [subject,setSubject] = useState([])
  const [sublist, setSublist] = useState([])
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
      alert("refresh")
    }
    
  }
  const fetchtimetable = async () =>{
    // console.log(timetableId)
    const {data} = await axios.get(`${baseURL}timetable/allttbyid/${timetableId}`,{

      withCredentials:true
    })
    console.log(data)
    const res = data.TimeTable.days[0].periods
    setShowtime(res)
    const periodsubjects = data.TimeTable.days.map(periodsobj => periodsobj.periods.map(subjectobj => subjectobj.subject))
      const flattenedSubjects = periodsubjects.flat();
      const sortedsub = [...new Set(flattenedSubjects.map(s => s.toUpperCase()))].sort();      
      setSublist(sortedsub)
      console.log(sortedsub);
      setSubject(periodsubjects)
  }
  
  useEffect(() => {
    if (classday) {
      setDays(classday);
      fetchteacher()
    }
    fetchsection()
    fetchtimetable()
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
            //  onChange={(e) => setSelectedsubject(e.target.value)} chnage done 
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
        <tbody className="">
              {
                showtime.map((timeobj, idx) => (
                  <tr key={idx} className="border-b  border-gray-700 bg-gray-600 hover:bg-gray-800 transition-all">
                    <td className="p-4  flex justify-center items-center border text-teal-300">{timeobj.time}</td>
                    {
                      subject.map((subobj, index) => (
                        <td className="p-4 border uppercase text-teal-300" key={index}>{subobj[idx]}</td>
                      ))
                    }
                    <td></td>
                  </tr>
                ))
              }
            </tbody>
      </table>
    </div>

  )
}

export default StartcreateTimet

