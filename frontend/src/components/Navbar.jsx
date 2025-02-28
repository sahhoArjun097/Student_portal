import { useContext, useState } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

function Navbar() {

  const userData = useSelector((state) => state.authSlice.userData);
  const { darkMode, toggleMode } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <>
      <nav
        className={`w-full h-auto py-4 px-5 md:px-16 flex items-center justify-between ${darkMode ? "bg-gray-900" : "bg-gray-200"
          }`}
      >
        <Link to="/">
          <img className="h-10" src="logo.png" alt="" />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none"
        >
          {isMenuOpen ? (
            <X size={28} className={darkMode ? "text-white" : "text-black"} />
          ) : (
            <Menu size={28} className={darkMode ? "text-white" : "text-black"} />
          )}
        </button>
        <div className=" flex   gap-5">
          <Link
            to="/"
            className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white"
          >
            About us
          </Link>


        </div>

        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-opacity-95 md:bg-transparent z-50 flex flex-col md:flex-row md:gap-7 items-center transition-all duration-300 ease-in-out ${isMenuOpen ? "block bg-gray-800 p-5" : "hidden md:flex"
            }`}
        >

          <div className="flex">
            <img src="/notification.png" className="h-10 w-10" alt=""/>
            <div className="h-5 w-5 bg-amber-300 rounded-2xl"></div>
            </div>
          {userData?.user?.role === "student" && (
            <Link
              to="/profile"
              className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white"
            >

              {
                userData?.user?.gender === "Male" ? <img className="w-10 h-10" src="/maleprofile.png" alt="" /> : <img className="w-10 h-10" src="/femaleprofile.png" alt="" />
              }

            </Link>
            
          )} 


          {userData?.user?.role === "teacher" && (
            <>
              <Link
                to="/profile"
                className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white"
              >
                Profile
              </Link>
              <Link
                to="/addnotice"
                className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white"
              >
                Add Notice
              </Link>
              <Link
                to="/addcontest"
                className="text-lg font-semibold hover:text-blue-300 duration-300 text-white md:text-black dark:md:text-white"
              >
                Add Contest
              </Link>
            </>
          )}

        </div>

      </nav>
      <hr />
    </>
  );
}

export default Navbar;
