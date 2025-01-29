import { useContext, useState } from "react";
import { Context } from "../main";
import "../index.css";

function Navbar() {
  const { darkMode, toggleMode } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`w-full h-auto flex items-center justify-between md:px-16 px-5 py-4 ${
          darkMode ? "bg-gray-900" : "bg-gray-200"
        }`}
      >
        {/* Logo */}
        <p
          className={`text-xl font-bold ${
            darkMode ? "text-yellow-400" : "text-black"
          }`}
        >
          StudentPortal
        </p>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          {/* <button
            onClick={toggleMenu}
            className={`p-2 rounded-md ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
            }`}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button> */}
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-opacity-95 md:static md:flex md:items-center md:gap-7 md:w-auto md:bg-transparent ${
            darkMode ? "bg-[#09090b]" : "bg-gray-200"
          }`}
        >
          <nav
            className={`flex flex-col items-center gap-6 md:flex-row md:gap-7 p-5 md:p-0 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <a
              href="/"
              className={`hover:text-blue-300 transition text-lg ${
                darkMode ? "text-white" : "text-black"
              } font-semibold duration-300`}
            >
              Home
            </a>
            <a
              href="/profile"
              className={`hover:text-blue-300 transition text-lg ${
                darkMode ? "text-white" : "text-black"
              } font-semibold duration-300`}
            >
              Profile
            </a>
            <a
              href="/login"
              className={`hover:text-blue-300 transition text-lg ${
                darkMode ? "text-white" : "text-black"
              } font-semibold duration-300`}
            >
              Login
            </a>
          </nav>
        </div>

        {/* Dark Mode Toggle */}
        <label className="relative inline-flex items-center cursor-pointer ml-4 md:ml-0">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={toggleMode}
          />
          <div
            className={`w-16 h-8 rounded-full duration-500 overflow-hidden bg-gray-200 
            ${darkMode ? "bg-[#383838] shadow-gray-700" : "shadow-gray-400"} shadow-lg peer`}
          >
            <div
              className={`absolute h-6 w-6 rounded-full bg-white top-1/2 left-1 transition-all duration-700 
              ${darkMode ? "-translate-y-full opacity-0 rotate-90" : "-translate-y-1/2"} `}
            >
              ☀️
            </div>
            <div
              className={`absolute h-6 w-6 rounded-full bg-[#1d1d1d] top-[2px] right-1 transition-all duration-700 
              ${darkMode ? "translate-y-0 opacity-100 rotate-180" : "translate-y-full opacity-0"}`}
            >
              🌑
            </div>
          </div>
        </label>
      </div>
      <hr className={`h-[1px] w-full ${darkMode ? "text-white" : "text-black"}`} />
    </>
  );
}

export default Navbar;
