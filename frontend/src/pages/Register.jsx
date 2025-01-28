import { useContext } from "react"
import { Context } from "../main"

function Register() {
    const { darkMode } = useContext(Context);
  return (
    <>
    <div className={`min-h-screen  w-full justify-center p-3 md:p-8 flex items-center ${darkMode ? "bg-[#09090b]" : "bg-white" } `} >
        <p className={`${darkMode?  "text-white" : "text-black"}`}>register</p></div>
        <hr className={` w-full h-[1px] ${darkMode ? "text-white":"text-black"}`}/>
    </>
  )
}

export default Register;