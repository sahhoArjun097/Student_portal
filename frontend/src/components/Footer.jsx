
import { useContext } from 'react'
import { Context } from '../main'

function Footer() {
    const {darkMode} = useContext(Context)
  return (
    <div className={`w-full h-full  p-2 md:p-8  ${darkMode ? `bg-[#09090b]`: "bg-white"}`}> 
    <p className={` ${darkMode ? `text-white`:"text-black"}`}>footer</p></div>
  )
}

export default Footer