import { useState, } from "react";
import axios from "axios";

function RegisterStudent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "Male",
        dateOfBirth: "",
        sectionId: "",
        rollNumber: "",
        address: "",
        phone: "",
        role: "student",
    });
    //   const [sections, setSections] = useState([]);
    const [message, setMessage] = useState("");

    //   useEffect(() => {
    //     // Fetch sections from API
    //     axios.get("http://localhost:4000/api/v1/sections")
    //       .then(response => setSections(response.data))
    //       .catch(error => console.error("Error fetching sections:", error));
    //   }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); // Clear previous messages

        try {
            const response = await axios.post(
                "http://localhost:4000/api/v1/user/student/register",
                formData,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );


            if (response.data.success) {
                setMessage("Student registered successfully!");
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    gender: "Male",
                    dateOfBirth: "",
                    sectionId: "",
                    rollNumber: "",
                    address: "",
                    phone: "",
                    role: "student",
                });
            } else {
                setMessage("Registration failed. Try again.");
            }
        } catch (error) {
            console.error("Error registering student:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
<div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4 bg-gradient-to-r from-blue-300 to-purple-400">

  {/* Image Section */}
  <div className="md:w-1/2  justify-center hidden md:block">
  <img src="/studentregister.png" alt="Register" className="w-full " />
</div>


  {/* Form Section */}
  <div className="w-full md:w-1/2 p-6  bg-opacity-80 backdrop-blur-xl rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center mb-4">Student Registration</h2>
    {message && <p className="text-center text-red-500">{message}</p>}

    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name & Email Fields */}
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Password Field */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      {/* Gender Selection */}
      <div>
        <label className="block font-medium">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Date of Birth */}
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      {/* Section ID */}
      <input
        type="text"
        name="sectionId"
        placeholder="Section ID"
        value={formData.sectionId}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      {/* Roll Number */}
      <input
        type="text"
        name="rollNumber"
        placeholder="Roll Number"
        value={formData.rollNumber}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      {/* Address */}
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      {/* Phone Number */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all"
      >
        Register
      </button>
    </form>
  </div>
</div>


    );
}

export default RegisterStudent;
