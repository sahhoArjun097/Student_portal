import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Announcements from "./pages/Announcements";
import Contest from "./pages/Contest";
import Assingments from "./pages/Assingments";
import Timetable from "./pages/Timetable";
import Fee from "./pages/Fee";
import DataBoxes from "./pages/text";
import Notice from "./pages/Notice";
import Class from "./pages/Class";
import RegisterStudent from "./pages/RegisterStudent";
import RegisterTeacher from "./pages/RegisterTeaher";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-100">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/announcements" element={<Announcements/>}/>
        <Route path="/contest" element={<Contest/>}/>
        <Route path="/assingments" element={<Assingments/>}/>
        <Route path="/timetable" element={<Timetable/>}/>
        <Route path="/fee" element={<Fee/>}/>
        <Route path="/test" element={<DataBoxes/>}/>
        <Route path="/notice" element={<Notice/>}/>
        <Route path="/class" element={<Class/>}/>
        <Route path="/Sr" element={<RegisterStudent/>}/>
        <Route path="/Tr" element={<RegisterTeacher/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App;