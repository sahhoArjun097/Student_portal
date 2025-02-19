import axios from 'axios'
import React, { useState } from 'react'

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
                notice, // Added notice object as payload
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log("Notice created:", res.data);
            alert("Notice created successfully!");
            // setNotice("")

        } catch (error) {
            console.log(error);
            alert("Failed to create notice");
        }
    };

    return (
        <>
            <div className='flex justify-center w-full items-center min-h-screen bg-gray-500 text-white'>
                <div className="w-96 bg-gradient-to-br bg-gray-900 p-8 rounded-2xl border-2 border-transparent 
                  relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#e81cff] before:to-[#40c9ff] before:rounded-2xl before:-z-10">
                    <h2 className="text-2xl font-bold mb-4 text-center">Create Notice</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-[#717171] font-semibold text-sm">Enter the Title</label>
                            <input
                                type="text"
                                name="title"
                                value={notice.title}
                                onChange={handleChange}
                                required
                                className="w-full p-3 uppercase rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-[#e81cff]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="textarea" className="text-[#717171] font-semibold text-sm">Description</label>
                            <textarea
                                type="text"
                                name="description"
                                value={notice.description}
                                onChange={handleChange}
                                rows="4"
                                required
                                className="w-full p-3  rounded-lg bg-transparent border border-[#414141] text-white resize-none focus:outline-none focus:border-[#e81cff]"
                            ></textarea>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[#717171] font-semibold text-sm"> Issued by</label>
                            <input
                                type="text"
                                value={notice.issuedBy}
                                onChange={handleChange}
                                name="issuedBy"
                                required
                                className="w-full p-3  rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-[#e81cff]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-2/5 bg-[#313131] border border-[#414141] text-[#717171] font-semibold py-3 rounded-md 
                            hover:bg-white hover:border-white hover:text-black transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddNotice;
