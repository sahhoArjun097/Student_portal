import React from 'react'
function About() {
    return (
        <>
            <div
                className=" mt-18  gap-7 flex flex-col bg-cover w-full  bg-center bg-no-repeat h-full"
                style={{ backgroundImage: "url('/about.jpg')" }}
            >
                <div className='flex w-full p-5 md:p-17 items-center  gap-6 justify-center flex-col'>
                    <div className="earth  flex flex-col items-center">
                        <svg width="200" height="100" viewBox="0 0 200 100" className="mb-[-60px]">
                            <defs>
                                <path id="curvePath" d="M 20,80 A 90,90 0 0,1 180,80" fill="transparent" />
                            </defs>
                            <text fill="blue" fontSize="16" fontWeight="bold">
                                <textPath href="#curvePath" startOffset="50%" textAnchor="middle" className="bg-gradient-to-r from-purple-400">
                                    SPRINGFIELD ACADEMY
                                </textPath>
                            </text>
                        </svg>
                        <div className="earth-loader">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    transform="translate(100 100)"
                                    d="M29.4,-17.4C33.1,1.8,27.6,16.1,11.5,31.6C-4.7,47,-31.5,63.6,-43,56C-54.5,48.4,-50.7,16.6,-41,-10.9C-31.3,-38.4,-15.6,-61.5,-1.4,-61C12.8,-60.5,25.7,-36.5,29.4,-17.4Z"
                                    fill="#7CC133"
                                ></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    transform="translate(100 100)"
                                    d="M31.7,-55.8C40.3,-50,45.9,-39.9,49.7,-29.8C53.5,-19.8,55.5,-9.9,53.1,-1.4C50.6,7.1,43.6,14.1,41.8,27.6C40.1,41.1,43.4,61.1,37.3,67C31.2,72.9,15.6,64.8,1.5,62.2C-12.5,59.5,-25,62.3,-31.8,56.7C-38.5,51.1,-39.4,37.2,-49.3,26.3C-59.1,15.5,-78,7.7,-77.6,0.2C-77.2,-7.2,-57.4,-14.5,-49.3,-28.4C-41.2,-42.4,-44.7,-63,-38.5,-70.1C-32.2,-77.2,-16.1,-70.8,-2.3,-66.9C11.6,-63,23.1,-61.5,31.7,-55.8Z"
                                    fill="#7CC133"
                                ></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    transform="translate(100 100)"
                                    d="M30.6,-49.2C42.5,-46.1,57.1,-43.7,67.6,-35.7C78.1,-27.6,84.6,-13.8,80.3,-2.4C76.1,8.9,61.2,17.8,52.5,29.1C43.8,40.3,41.4,53.9,33.7,64C26,74.1,13,80.6,2.2,76.9C-8.6,73.1,-17.3,59,-30.6,52.1C-43.9,45.3,-61.9,45.7,-74.1,38.2C-86.4,30.7,-92.9,15.4,-88.6,2.5C-84.4,-10.5,-69.4,-20.9,-60.7,-34.6C-52.1,-48.3,-49.8,-65.3,-40.7,-70C-31.6,-74.8,-15.8,-67.4,-3.2,-61.8C9.3,-56.1,18.6,-52.3,30.6,-49.2Z"
                                    fill="#7CC133"
                                ></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path
                                    transform="translate(100 100)"
                                    d="M39.4,-66C48.6,-62.9,51.9,-47.4,52.9,-34.3C53.8,-21.3,52.4,-10.6,54.4,1.1C56.3,12.9,61.7,25.8,57.5,33.2C53.2,40.5,39.3,42.3,28.2,46C17,49.6,8.5,55.1,1.3,52.8C-5.9,50.5,-11.7,40.5,-23.6,37.2C-35.4,34,-53.3,37.5,-62,32.4C-70.7,27.4,-70.4,13.7,-72.4,-1.1C-74.3,-15.9,-78.6,-31.9,-73.3,-43C-68.1,-54.2,-53.3,-60.5,-39.5,-60.9C-25.7,-61.4,-12.9,-56,1.1,-58C15.1,-59.9,30.2,-69.2,39.4,-66Z"
                                    fill="#7CC133"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className='  w-[90%] md:w-[60%] flex items-center  justify-center '>
                        <p className="text-2xl text-gray-800 font-bold mt-2 max--2wxl mx-auto text-center">
                            Springfield Academy is dedicated to fostering a community of lifelong learners. Our mission is to provide quality education through innovative teaching methods and a holistic learning approach that shapes the leaders of tomorrow.
                        </p>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <p className="text-5xl uppercase text-gray-800  Sigmar mt-2 max--2wxl mx-auto text-center">gallary</p>
                </div>

                <div className="w-full h-full flex justify-center items-center p-3 md:p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-7">

                        <div className="relative overflow-hidden  w-90 md:w-80 h-60 rounded-3xl cursor-pointer text-2xl font-bold">
                            <div className="z-10 absolute w-full h-full peer flex justify-center items-center"></div>
                            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full transition-all duration-500"></div>
                            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-12 w-36 h-44 rounded-full bg-white opacity-70 transition-all p-7 Sigmar duration-500">FUTURE INNOVATION EVENT</div>
                            <div
                                className=" w-90 md:w-80 h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/techevent.jpg')" }}
                            ></div>
                        </div>
                        <div className="relative overflow-hidden w-90 md:w-80 h-60 rounded-3xl cursor-pointer text-2xl font-bold">
                            <div className="z-10 absolute w-full h-full peer flex justify-center items-center"></div>
                            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full transition-all duration-500"></div>
                            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-12 w-36 h-44 rounded-full bg-white opacity-70 Sigmar transition-all duration-500">HACKTHON EVENT</div>
                            <div
                                className="w-90 md:w-80 h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/study.png')" }}
                            ></div>
                        </div>
                        <div className="relative overflow-hidden w-90 md:w-80 h-60 rounded-3xl cursor-pointer text-2xl font-bold">
                            <div className="z-10 absolute w-full h-full peer flex justify-center items-center"></div>
                            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full transition-all duration-500"></div>
                            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-12 w-36 h-44 rounded-full bg-white opacity-70  p-7 Sigmar  transition-all duration-500">TRAINIGN WORKSHOPS</div>
                            <div
                                className="w-90 md:w-80 h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/hackthon.png')" }}
                            ></div>
                        </div>
                        <div className="relative overflow-hidden w-90 md:w-80 h-60 rounded-3xl cursor-pointer text-2xl font-bold">
                            <div className="z-10 absolute w-full h-full peer flex justify-center items-center"></div>
                            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full transition-all duration-500"></div>
                            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-12 w-36 h-44 rounded-full bg-white opacity-70  p-7 Sigmar  transition-all duration-500">CULTURAL EVENT</div>
                            <div
                                className="w-90 md:w-80 h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/cultural.png')" }}
                            ></div>
                        </div>
                        <div className="relative overflow-hidden w-90 md:w-80 h-60 rounded-3xl cursor-pointer text-2xl font-bold">
                            <div className="z-10 absolute w-full h-full peer flex justify-center items-center"></div>
                            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full transition-all duration-500"></div>
                            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-12 w-36 h-44 rounded-full bg-white opacity-70  p-7 Sigmar  transition-all duration-500"> FELICITATION EVENT</div>
                            <div
                                className="w-90 md:w-80 h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('feliciation.png')" }}
                            ></div>
                        </div>

                        <div className="relative overflow-hidden w-90 md:w-80 h-60 rounded-3xl cursor-pointer text-2xl font-bold">
                            <div className="z-10 absolute w-full h-full peer flex justify-center items-center"></div>
                            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full transition-all duration-500"></div>
                            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-12 w-36 h-44 rounded-full bg-white opacity-70  p-7 Sigmar  transition-all duration-500">DANCE EVENT</div>
                            <div
                                className="w-90 md:w-80 h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/dance.png')" }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full   p-15 flex-col justify-center flex items-center'>
                    <div className=''><p className='Sigmar'>DEVELOP BY</p></div>
                    <div className="p-6">
                        <div className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
                            <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
                                <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                                    Thank You
                                </p>
                                <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
                                    It’s so nice that you had the time to view this site
                                </p>
                                <p className="font-serif text-[10px] sm:text-[12px] text-gray-700">
                                    Wishing you a fantastic day ahead!
                                </p>
                                <p className="font-sans text-[10px] text-gray-700 pt-5">ARJUN AGARWAL</p>
                            </div>
                            <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
                                HOLA
                            </button>
                            <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
                            <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
                            <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
                            <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About