import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-100">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="" element={}/> */}
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App;