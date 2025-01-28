import { useContext } from "react"
import { Context } from "../main"


function Home() {
    // const { darkMode, toggleMode } = useContext(Context);

    const {darkMode} = useContext(Context)
  return (
    <>
    <div className={`min-h-screen  w-full justify-center p-3 md:p-8 flex items-center bg-cover bg-center bg-no-repeat ${darkMode ? "bg-[#09090b]" : "bg-white" } `} 
      style={{ backgroundImage: "url('/homebg.png')" }}>
        <p className={`${darkMode?  "text-white" : "text-black"}`}></p></div>
        <hr className={` w-full h-[1px] ${darkMode ? "text-white":"text-black"}`}/>
    </>
  )
}

export default Home