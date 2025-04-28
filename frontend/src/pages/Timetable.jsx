import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Timetable = () => {
  const [week,setWeek] = useState([])
  const [time,setTime] = useState([])
  const [subject,setSubject] = useState([])
  const userData = useSelector((state) => state.authSlice.userData.user);
  const usersectionId = userData.sectionId
  const fetchAllData = async () => {
    try {
      
      const sectionRes = await axios.get(`http://localhost:4000/api/v1/section/getsectionbyid/${usersectionId}`);
      const section = sectionRes.data.section;
  
      const timetableId = section.timetable;
      const { data } = await axios.get(`http://localhost:4000/api/v1/timetable/allttbyid/${timetableId}`);
      const weekdays = data.TimeTable.days.map(weekdaysobj=> weekdaysobj.day)
      setWeek(weekdays)
      const classtime = data.TimeTable.days[0].periods
      setTime(classtime)
      const periodsubjects = data.TimeTable.days.map(periodsobj => periodsobj.periods.map(subjectobj => subjectobj.subject))
      setSubject(periodsubjects)
    

    } catch (error) {
      console.error("Error fetching section or timetable:", error);
    }
  };
  useEffect(() => {
    if (usersectionId) {
      fetchAllData();
    }
  }, [usersectionId]);
  return (
    <>

<div className="w-full mt-18 min-h-screen bg-gray-900 bg-blend-soft-light bg-cover bg-center bg-no-repeat text-white px-6 py-12 flex flex-col items-center"
  style={{ backgroundImage: "url('/timetabil.png')" }}>
  
  <h1 className="text-4xl md:text-7xl font-bold text-center p-9 text-black"
    style={{ textShadow: "0px 0px 17px rgba(255, 255, 0, 0.9)" }}>
    Time Table
  </h1>

  <div className="w-full max-w-5xl overflow-x-auto">
    <table className="w-full border border-gray-700 shadow-lg">
      <thead>
        <tr className="bg-gray-800 border text-teal-400">
          <th className="p-4 border text-left">⏰ Time/Days</th>
          {
            week.map((dayobj,ind)=>(
              <td className="border p-4  bg-gray-600 hover:bg-gray-800 transition-all" key={ind}>{dayobj} </td>
            ))
          }
        </tr>
      </thead>

      <tbody className="">
        {
          time.map((timeobj,idx)=>(
            <tr key={idx} className="border-b border-gray-700 bg-gray-600 hover:bg-gray-800 transition-all">
              <td className="p-4 border text-teal-300">{timeobj.time}</td>
              {
                subject.map((subobj,index)=>(
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
</div>

      <hr className=" w-full h-[1px] text-white" />
    </>
  );
};

export default Timetable;

