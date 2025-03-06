import React from 'react'
function About() {
    return (
        <div
            className=" mt-19 bg-cover w-full  bg-center bg-no-repeat h-screen"
            style={{ backgroundImage: "url('/about.jpg')" }}
        >
            <div className='flex mt-40 w-full justify-between items-center h-full '>
                <div className='w-full h-full '>

                </div>
                <div className="w-full">
                    <img className=' md:overflow-hidden  object-contain md:h-[60%]' src='/about3.png' alt=''></img>
                </div>
               

            </div>

        </div>
    )
}
export default About