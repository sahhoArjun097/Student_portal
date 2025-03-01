import { useContext, useState } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X, Bell } from "lucide-react";

function Navbar() {
  const userData = useSelector((state) => state.authSlice.userData);
  const { darkMode } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`w-full h-auto py-4 px-5 md:px-16 flex items-center justify-between ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {/* Left - Logo */}
        <Link to="/">
          <img className="h-10 rounded-2xl" src="mainlogo1.png" alt="Logo" />
        </Link>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex gap-7">
          <Link to="/" className="text-lg font-semibold hover:text-blue-400 duration-300">
            Home
          </Link>
          <Link to="/about" className="text-lg font-semibold hover:text-blue-400 duration-300">
            About Us
          </Link>
          <Link to="/features" className="text-lg font-semibold hover:text-blue-400 duration-300">
            Features
          </Link>
        </div>

        {/* Right - Profile & Notifications */}
        <div className="hidden md:flex items-center gap-6">
          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <Bell size={24} />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              
            </span>
          </div>

          {/* Profile Section */}
          {userData?.user?.role && (
            <Link to="/profile">
              {userData.user.gender === "Male" ? (
                <img className="w-10 h-10 rounded-full" src="/maleprofile.png" alt="Profile" />
              ) : (
                <img className="w-10 h-10 rounded-full" src="/femaleprofile.png" alt="Profile" />
              )}
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-opacity-95 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        } p-5 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-5 items-center">
          <Link to="/" className="text-lg font-semibold hover:text-blue-400 duration-300">
            Home
          </Link>
          <Link to="/about" className="text-lg font-semibold hover:text-blue-400 duration-300">
            About Us
          </Link>
          <Link to="/features" className="text-lg font-semibold hover:text-blue-400 duration-300">
            Features
          </Link>

          {/* Mobile Profile & Notifications */}
          <div className="flex gap-5 items-center">
            <div className="relative cursor-pointer">
              <Bell size={24} />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                
              </span>
            </div>

            {userData?.user?.role && (
              <Link to="/profile">
                {userData.user.gender === "Male" ? (
                  <img className="w-10 h-10 rounded-full" src="/maleprofile.png" alt="Profile" />
                ) : (
                  <img className="w-10 h-10 rounded-full" src="/femaleprofile.png" alt="Profile" />
                )}
              </Link>
            )}
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Navbar;
