import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Contest from "./pages/Contest";
import Assignments from "./pages/Assingments";
import Timetable from "./pages/Timetable";
import Fee from "./pages/Fee";
import Notice from "./pages/Notice";
import Class from "./pages/Class";
import Register from "./pages/Register";
import AddContest from "./pages/AddContest";
import AddNotice from "./pages/AddNotice";

// ✅ Route Guard Component (Only allow authenticated users)
const ProtectedRoute = ({ children }) => {
  // const userData = useSelector((state)=>state.userData)
  const userData = useSelector((state) => state.authSlice.userData)
  console.log(userData)
  // const userData = localStorage.getItem("userData");

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// ✅ Layout Component
const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-100">
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

// ✅ Updated App Component
function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Wrap all protected routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
          <Route path="/contest" element={<ProtectedRoute><Contest /></ProtectedRoute>} />
          <Route path="/assignments" element={<ProtectedRoute><Assignments /></ProtectedRoute>} />
          <Route path="/timetable" element={<ProtectedRoute><Timetable /></ProtectedRoute>} />
          <Route path="/fee" element={<ProtectedRoute><Fee /></ProtectedRoute>} />
          <Route path="/notice" element={<ProtectedRoute><Notice /></ProtectedRoute>} />
          <Route path="/class" element={<ProtectedRoute><Class /></ProtectedRoute>} />
          <Route path="/addcontest" element={<ProtectedRoute><AddContest /></ProtectedRoute>} />
          <Route path="/addnotice" element={<ProtectedRoute><AddNotice /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer";
// import Profile from "./pages/Profile";
// import Contest from "./pages/Contest";
// import Assingments from "./pages/Assingments";
// import Timetable from "./pages/Timetable";
// import Fee from "./pages/Fee";
// // import DataBoxes from "./pages/text";
// import Notice from "./pages/Notice";
// import Class from "./pages/Class";
// import Register from "./pages/Register";
// import AddContest from "./pages/AddContest";
// import AddNotice from "./pages/AddNotice";
// import ClassSelector from "./pages/text";

// function App() {
//   return (
//     <div className="w-full h-full flex flex-col items-center bg-gray-100">
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/profile" element={<Profile/>}/> 
//         <Route path="/contest" element={<Contest/>}/>
//         <Route path="/assignments" element={<Assingments/>}/>
//         <Route path="/timetable" element={<Timetable/>}/>
//         <Route path="/fee" element={<Fee/>}/>
//         <Route path="/test" element={<ClassSelector/>}/>
//         <Route path="/notice" element={<Notice/>}/>
//         <Route path="/class" element={<Class/>}/>
//         <Route path="/register" element={<Register/>}/>
//         <Route path="/addcontest" element={<AddContest/>}/>
//         <Route path="/addnotice" element={<AddNotice/>}/>
//       </Routes>
//       <Footer/>
//     </Router>
//     </div>
//   )
// }

// export default App;
