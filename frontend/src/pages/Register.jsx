import { useEffect, useState } from "react";
import axios from "axios";

function Register() {
    const [isStudent, setIsStudent] = useState(true);
    const [allClass, setAllClass] = useState([])
    const [section, setSection] = useState([])
    const [selectedClassId, setselectedclassId] = useState("")
    const [selectedSectionId, setselectedsectionId] = useState("")
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
        department: "",
        role: "student",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


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
    const handleClass = (e) => {
        const selectid = e.target.value
        setselectedclassId(selectid);
        const selectedclass = allClass.find(cls => cls._id === selectid)
        setSection(selectedclass.sections)
        setselectedsectionId("")

    }
    const handleSection = (e) => {
        const sectionId = e.target.value;
        setselectedsectionId(sectionId);
        setFormData((prev) => ({ ...prev, sectionId }));  // Update formData
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
    
        const updatedFormData = {
            ...formData,
            role: isStudent ? "student" : "teacher",
            sectionId: selectedSectionId,  // Ensure sectionId is added
        };
    
        const endpoint = isStudent
            ? "http://localhost:4000/api/v1/user/student/register"
            : "http://localhost:4000/api/v1/user/teacher/register";
    
        try {
            const response = await axios.post(endpoint, updatedFormData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
    
            if (response.data.success) {
                setMessage(`${isStudent ? "Student" : "Teacher"} registered successfully!`);
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
                    department: "",
                    role: isStudent ? "student" : "teacher",
                });

                setselectedsectionId("");  
                setselectedclassId("")// Reset section selection
            } else {
                setMessage("Registration failed. Try again.");
            }
        } catch (error) {
            console.error("Error registering:", error);
            setMessage("An error occurred. Please try again.");
        }
    };
    
    useEffect(() => {
        getAllClass();
    }, []);
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:p-4 bg-gradient-to-r from-blue-400 to-purple-300">
            <div className="md:w-1/2  justify-center hidden md:block">
                <img src="/studentregister.png" alt="Register" className="w-full " />
            </div>
            <div className="w-full md:w-1/2 p-6 bg-opacity-80 backdrop-blur-xl rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4">{isStudent ? "Student" : "Teacher"} Registration</h2>
                <div className="flex justify-center mb-4">
                    <label className="flex items-center cursor-pointer">
                        <span className="mr-2 font-medium">Student</span>
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={!isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                        <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isStudent ? "translate-x-0" : "translate-x-6"}`}></div>
                        </div>
                        <span className="ml-2 font-medium">Teacher</span>
                    </label>
                </div>
                {message && <p className="text-center text-red-500">{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
                    {isStudent && (
                        <>
                            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </>
                    )}
                    {!isStudent && (
                        <>
                            <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </>
                    )}
                    <select onChange={handleClass} value={selectedClassId} className="w-full p-2 border rounded">
                        <option value="" >
                            Select Class
                        </option>
                        {allClass.length > 0 ? (
                            allClass.map((classItem) => (
                                <option key={classItem._id} value={classItem._id}>
                                    {classItem.className}
                                </option>

                            ))
                        ) : (
                            <p className="text-gray-400">No classes available</p>
                        )}

                    </select>
                    <select onChange={handleSection} value={selectedSectionId} className="w-full p-2 border rounded">
                        <option>
                            select section
                        </option>
                        {
                            section.length > 0 ?(
                                section.map((section) => (
                                    <option value={section._id} key={section._id}>
                                        {section.sectionName}
                                    </option>
                                ))

                            ):(<option disabled> No option available</option>)
                            
                        }
                    </select>
                    {/* <input type="text" name="sectionId" placeholder="Section ID" value={formData.sectionId} onChange={handleChange} className="w-full p-2 border rounded" required /> */}
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
