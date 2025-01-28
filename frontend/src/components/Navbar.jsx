// import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../main";
import '../index.css'

function Navbar() {
  const { darkMode, toggleMode } = useContext(Context);

  return (
    <>
      <div
        className={`w-full h-full flex justify-center items-center md:px-16 p-5 md:p-6 ${
          darkMode ? "bg-[#09090b]" : "bg-gray-200"
        }`}
      >
        <div className="w-full h-full">
          <p
            className={`text-xl font-bold ${
              darkMode ? "text-yellow-400" : "text-black"
            }`}
          >
            StudentPortal
          </p>
        </div>
        <div className="gap-7 md:flex p-1">
          <a
            href="/"
            className={`hover:text-blue-300 transition text-lg ${
              darkMode ? "text-white" : "text-black"
            } font-semibold duration-300`}
          >
            Home
          </a>
          <a
            href="/login"
            className={`hover:text-blue-300 transition text-lg ${
              darkMode ? "text-white" : "text-black"
            } font-semibold duration-300`}
          >
            Login
          </a>
          <a
            href="/register"
            className={`hover:text-blue-300 transition text-lg ${
              darkMode ? "text-white" : "text-black"
            } font-semibold duration-300`}
          >
            Register
          </a>
        </div>

        <label className="relative inline-flex items-center cursor-pointer ml-4">
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
      <hr className="text-white h-[1px] w-full" />
    </>
  );
}

export default Navbar;
