import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const userData = useSelector((state) => state.authSlice.userData);
  const name = (userData.user)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [Message, setMessgae] = useState([])
  const location = useLocation();

  const fetchnotification = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/notification/getnotification",
        { withCredentials: true }
      );
      const allNotifications = [
        ...(data.notifications?.notice || []),
        ...(data.notifications?.contest || [])
      ];
      setMessgae(data.notifications);

      setNotifications(allNotifications);
     
    } catch (error) {
      console.error("No notices are coming", error);
    }
  };

  useEffect(() => {
    fetchnotification();
  }, []);

  // Close notification panel when route changes
  useEffect(() => {
    setIsNotificationOpen(false);
  }, [location]);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed z-10 py-4 px-5 md:px-16 flex items-center justify-between bg-black text-white">
        {/* Logo */}
        <Link to="/">

          {
            name.role === "admin" ? (
              <p className="Sigmar">AdminPortal</p>
            ) : name.role === "student" ? (
              <p className="Sigmar">StudentPortal</p>
            ) : (
              <p className="Sigmar">TeacherPortal</p>
            )
          }

        </Link>

        {/* Desktop Navigation Links */}
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
          
          {/* <Link to="/register" className="text-lg font-semibold hover:text-blue-400 duration-300">
            register
          </Link> */}
        </div>

        {/* Right - Profile & Notifications */}
        <div className="hidden md:flex items-center gap-6">
          {/* Notification Bell with Count */}
          <div className="relative cursor-pointer" onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
            <Bell size={24} />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {notifications.length}
              </span>
            )}
          </div>

          {/* Profile Section */}
          {userData?.user?.role && (
            <Link to="/profile">
              <img
                className="w-15 h-10 rounded-full"
                src={userData.user.gender === "Male" ? "/maleprofile.png" : "/femaleprofile.png"}
                alt="Profile"
              />
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {/* Notification Dropdown */}
      {isNotificationOpen && (
        <div className="absolute top-16 right-0 z-1 w-[50%] bg-gray-800 bg-opacity-95 text-white p-5 transition-all duration-300 ease-in-out overflow-hidden h-screen overflow-x-hidden">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <ul>
            {/* Check for new notices and contests separately */}
            <div className="w-[60%] h-full p-4 flex gap-6 flex-col  ">
              {Message.notice.length > 0 && (
                <Link to={"/notice"}>
                  <li className="p-2 border-b border-gray-600">📢 New Notice Available ({Message.notice.length})</li>
                </Link>
              )}
              {Message.contest.length > 0 && (
                <Link to={"/contest"}>
                  <li className="p-2 border-b border-gray-600">🏆 New Contest Announced  ({Message.contest.length})</li>
                </Link>
              )}
            </div>


            {/* If there are no notifications */}
            {notifications.length === 0 && <li>No new notifications</li>}
          </ul>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 min-h-screen z-10 w-[50%] bg-gray-800 bg-opacity-95 text-white p-5 transition-all duration-300 ease-in-out overflow-x-hidden">
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
          </div>
        </div>
      )}
      <hr className='text-white' />
    </>
  );
}

export default Navbar;
