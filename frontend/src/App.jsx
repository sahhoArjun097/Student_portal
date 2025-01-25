import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-100">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="" element={}/> */}
      </Routes>
    </Router>
    </div>
  )
}

export default App;