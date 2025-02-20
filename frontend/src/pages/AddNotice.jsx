import axios from 'axios'
import  { useState } from 'react'

function AddNotice() {
    const [notice, setNotice] = useState({
        title: "",
        description: "",
        issuedBy: ""
    });

    const handleChange = (e) => {
        setNotice({ ...notice, [e.target.name]: e.target.value.toUpperCase() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Fixed typo
        try {
            const res = await axios.post("http://localhost:4000/api/v1/notice/noticeinfo",
                notice,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(res.data)
            setNotice({
                title: "",
                description: "",
                issuedBy: ""

            })
            alert("Notice created successfully");
        } catch (error) {
            console.log(error);
            alert("Failed to create notice")

        }
    };
    return (

        <div className="flex justify-center w-full flex-col items-center min-h-screen gap-8 bg-gray-500 p-5 text-white">
            {/* Notice Form */}
            <div className="w-full p-6 md:w-96 bg-gradient-to-br bg-gray-900 md:p-8 rounded-2xl border-2 border-transparent 
      relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#e81cff] before:to-[#40c9ff] 
      before:rounded-2xl before:-z-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Create Notice</h2>
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label className="text-[#717171] font-semibold text-sm">Enter the Title</label>
                        <input
                            type="text"
                            name="title"
                            value={notice.title}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white 
            focus:outline-none focus:border-[#e81cff]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[#717171] font-semibold text-sm">Description</label>
                        <textarea
                            name="description"
                            value={notice.description}
                            onChange={handleChange}
                            rows="4"
                            required
                            className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white resize-none 
            focus:outline-none focus:border-[#e81cff]"
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[#717171] font-semibold text-sm">Issued by</label>
                        <input
                            type="text"
                            name="issuedBy"
                            value={notice.issuedBy}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white 
            focus:outline-none focus:border-[#e81cff]"
                        />
                    </div>
                </form>
            </div>


            <div className="w-full h-full flex justify-center">
                <div className="w-[95%] md:w-[50%] flex flex-col rounded-2xl p-6 bg-gray-900">
                    <div className="w-full flex justify-center">
                        <h2 className="text-2xl font-bold">PREVIEW</h2>
                    </div>
                    <div className="mt-3 text-sm flex flex-col gap-2 text-gray-500 dark:text-gray-400">
                        <p className="font-semibold">Title: {notice.title}</p>
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

    );
}

export default AddNotice;
