import { useContext, useState } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { darkMode, toggleMode } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`w-full h-auto py-4 px-5 md:px-16 flex items-center justify-between ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}>
      <Link to="/">
        {/* <p className={`text-xl font-bold ${darkMode ? "text-yellow-400" : "text-black"}`}>StudentPortal</p> */}
        {/* <img  className="h-10" src="logo1.png " alt=""/> */}
        {/* <img  className="h-10" src="logo2.png " alt=""/> */}
        <img  className="h-10" src="logo3.png " alt=""/>
      </Link>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md focus:outline-none">
        {isMenuOpen ? <X size={28} className={darkMode ? "text-white" : "text-black"} /> : <Menu size={28} className={darkMode ? "text-white" : "text-black"} />}
      </button>
      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-opacity-95 md:bg-transparent z-50 flex flex-col md:flex-row md:gap-7 items-center transition-all duration-300 ease-in-out ${isMenuOpen ? "block bg-gray-800 p-5" : "hidden md:flex"}`}>
        {/* <Link to="/" className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white">Home</Link> */}
        <Link to="/profile" className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white">Profile</Link>
        <Link to="/login" className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white">Login</Link>
        {/* <Link to="/class" className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white">class</Link> */}
        <Link to="/register" className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white">register</Link>
        <Link to="/addnotice" className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white"> addnotice</Link>
        <Link to="/addcontest" className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white">addcontest</Link>
        {/* <Link to="/" className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white">register</Link> */}
      </div>
      <label className="relative inline-flex items-center cursor-pointer ml-4 md:ml-0">
        <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={toggleMode} />
        <div className={`w-16 h-8 rounded-full duration-500 bg-gray-200 shadow-lg ${darkMode ? "bg-[#383838] shadow-gray-700" : "shadow-gray-400"}`}>
          <div className={`absolute h-6 w-6 rounded-full bg-white top-1/2 left-1 transition-all duration-700 ${darkMode ? "-translate-y-full opacity-0 rotate-90" : "-translate-y-1/2"}`}>
            ☀️
          </div>
          <div className={`absolute h-6 w-6 rounded-full bg-[#1d1d1d] top-[2px] right-1 transition-all duration-700 ${darkMode ? "translate-y-0 opacity-100 rotate-180" : "translate-y-full opacity-0"}`}>
            🌑
          </div>
        </div>
      </label>
    </nav>
  );
}
export default Navbar;
