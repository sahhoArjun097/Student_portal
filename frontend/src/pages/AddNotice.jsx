import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function AddNotice() {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const [teacher, setTeachers] = useState([])
    const userData = useSelector((state) => state.authSlice.userData.user)
    console.log(userData)
    const [notice, setNotice] = useState({
        title: "",
        description: "",
        issuedBy: ""
    });

    const handleChange = (e) => {
        setNotice({ ...notice, [e.target.name]: e.target.value });
    };

    const handleIssueBy = async () => {
        
        try {
            const { data } = await axios.get(`${baseURL}user/getAllTeacher`, {
                withCredentials: true
            });
            setTeachers(data);

        } catch (error) {
            console.error("Error fetching teachers:", error);
            setTeachers([]); // Set empty array on error to prevent undefined access
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!notice.issuedBy) {
            alert("Please select a teacher who issued the notice.");
            return;
        }

        try {

            const res = await axios.post(
                `${baseURL}notice/noticeinfo`,
                notice,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(res.data);
            setNotice({
                title: "",
                description: "",
                issuedBy: ""
            });
            alert("Notice created successfully");
        } catch (error) {
            console.log(error);
            alert("Failed to create notice");
        }
    };

    useEffect(() => {
        handleIssueBy()

    }, [ ]);
    return (
        <>
        
            <div className="flex justify-center w-full mt-18 flex-col items-center min-h-screen gap-8 bg-black p-5 text-white">
                <div className="w-full p-6 md:w-96 bg-gray-900 md:p-8 rounded-2xl border-2 border-transparent 
                    relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#e81cff] before:to-[#40c9ff] 
                    before:rounded-2xl before:-z-10">
                    <h2 className="text-2xl font-bold mb-4 text-center">Create Notice</h2>
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 font-semibold text-sm">Enter the Title</label>
                            <input
                                type="text"
                                name="title"
                                value={notice.title}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-transparent uppercase border border-gray-600 text-white 
                                focus:outline-none focus:border-[#e81cff]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 font-semibold text-sm">Description</label>
                            <textarea
                                name="description"
                                value={notice.description}
                                onChange={handleChange}
                                rows="4"
                                required
                                className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white resize-none 
                                focus:outline-none focus:border-[#e81cff]"
                            ></textarea>
                        </div>
                        <div className="flex flex-col gap-1">
                            <select
                                name="issuedBy"
                                className="border bg-black p-3 rounded-lg focus:outline-none focus:border-[#e81cff] text-white"
                                onChange={(e) => setNotice({ ...notice, issuedBy: e.target.value })}
                                value={notice.issuedBy}
                            >
                                <option value="" className="bg-black">Issued BY</option>
                                {teacher.map((t) => (
                                    <option className="bg-black text-white" key={t._id} value={t.name}>
                                        {userData.name === t.name ? t.name : ""}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </form>
                </div>
        
                {/* Preview */}
                <div className="w-full h-full flex justify-center">
                    <div className="w-[95%] md:w-[50%] flex flex-col rounded-2xl p-6 bg-gray-900">
                        <div className="w-full flex justify-center">
                            <h2 className="text-2xl font-bold">PREVIEW</h2>
                        </div>
                        <div className="mt-3 text-sm flex flex-col gap-2 text-gray-400">
                            <p className="font-semibold">Title: <span className="uppercase">{notice.title}</span></p>
                            <p>Description: {notice.description}</p>
                            <p>Issued By: {notice.issuedBy}</p>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="mt-4 p-3 w-full bg-gradient-to-r from-[#e81cff] to-[#40c9ff] 
                            text-white font-semibold rounded-lg hover:opacity-90 transition"
                        >
                            Submit Notice
                        </button>
                    </div>
                </div>
            </div>
        
        </>
        
        
       
    );
}

export default AddNotice;
// alot class to which the notice is showed 