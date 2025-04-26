import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Timetable = () => {

  const [items, setItems] = useState([]);
  const [days, setDays] = useState([])
  const [time,  setTime] = useState([])
  const [subjects,setSubjects] = useState([])
  const userData = useSelector((state) => state.authSlice.userData.user);
  const usersectionId = userData.sectionId
  const fetchAllData = async () => {
    try {
      const sectionRes = await axios.get(`http://localhost:4000/api/v1/section/getsectionbyid/${usersectionId}`);
      const section = sectionRes.data.section;
      setItems(section);
      const timetableId = section.timetable;
      const { data } = await axios.get(`http://localhost:4000/api/v1/timetable/allttbyid/${timetableId}`);
      setItems(data.TimeTable.days)
      console.log(data.TimeTable.days)
      
      const alldays = data.TimeTable.days.map((dayobj => dayobj.day))
      setDays(alldays)
      const subjectbyday = data.TimeTable.days.map((periodobj => periodobj.periods))
      setTime(subjectbyday)
      console.log(subjectbyday)
      const sub = data.TimeTable.days.map((periodobj => periodobj.periods)).map((subobj=> subobj.subject))
      console.log(sub)
      const ssubjectbyday = data.TimeTable.days.map((periodobj) => 
        periodobj.periods.map((period) => period.subject)
      );
      
      setSubjects(ssubjectbyday);
      console.log(ssubjectbyday);

      // extract all subjects
// const subjects = data.TimeTable.days.flatMap(day =>  
//   day.periods.map(period => period.subject)
// );
// console.log(subjects);
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
          {days.map((dayobj, index) => (
            <th key={index} className="p-4 border text-left">{dayobj}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {time.map((timeSlot, idx) => (
          <tr key={idx} className="border-b border-gray-700 bg-gray-600 hover:bg-gray-800 transition-all">
            <td className="p-4 border text-teal-300">{timeSlot.time}</td>
            {subjects.map((subsss, index) => (
              <td key={index} className="p-4 border text-white">{subsss}</td> // You can populate cells here
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      <hr className=" w-full h-[1px] text-white" />
    </>
  );
};

export default Timetable;

