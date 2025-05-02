import axios from "axios";
import { useEffect, useState } from "react";

function AddTimeTable() {
  const [selectClass, setselectClass] = useState([]);
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


  useEffect(() => {
    fetchclass()
  }, [])


  return (
    <>
      <div className="mt-50">
        <h1>
      Classes
        </h1>

        <select 
        className="border"
          onChange={(e) => setselectClass([e.target.value])}
        >
          {/* <option>selelct the class</option> */}
          {selectClass.map((classItem) => (
            <option key={classItem._id} value={classItem._id}>
              {classItem.className}

            </option>

          ))}
        </select>



      </div>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-4">
        <table className="border border-black table-fixed text-center w-auto">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Time/day</th>
              <th className="border border-black px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr>

            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddTimeTable;
