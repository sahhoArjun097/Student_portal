import React, { useEffect, useState } from 'react'

function StartcreateTimet({ data }) {
  const [days, setDays] = useState([])
  const [classtime, setTime] = useState([])
  const [classsubject, setClassSubject] = useState([])
  useEffect(() => {
    if (data && data.length > 0) {
      setDays(data);
    }
    setTime(time)
    setClassSubject(subjects)
  }, [data]);
  const time = ["9-10", "10-11", "11-12", "12-1", "1-2"]
  const subjects = ["English","Hindi","Math","Science","GK","Game"]

  return (
    <div className=" flex justify-center  mt-6 w-full max-w-5xl">
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
                <select>
                  <option>select time </option>
                  {classtime.map((timeobj, index) => (
                    <option key={index}>{timeobj}</option>
                  ))}
                </select>
              </td>
              {Array.from({ length: 6 }).map((__, i) => (
                <td key={i} className="border border-gray-400 px-4 py-2 text-black text-center">
                 
                    <select>
                      <option>select subject</option>
                      {
                        classsubject.map((subobj,index)=>(
                          <option key={index}>{subobj}

                          </option>
                        ))
                      }

                    </select>
                    
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