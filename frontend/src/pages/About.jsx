import React from 'react'

function About() {
    return (
        <div
            className=" mt-19 bg-cover w-full  bg-center bg-no-repeat h-screen"
            style={{ backgroundImage: "url('/about.jpg')" }}
        >
            <div className='flex  mt-20 justify-between items-center h-full  p-40'>
                <div className='w-full h-full '>
                </div>
                <div>gbfgdf</div>
                <div className="w-full">
                    <img className=' md:overflow-hidden  md:h-[60%]' src='/about3.png' alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default About