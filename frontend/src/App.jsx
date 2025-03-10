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
import Features from "./components/Features";
import About from "./pages/About";
const ProtectedRoute = ({ children  , allowRoles}) => {
  const userData = useSelector((state) => state.authSlice.userData)
  console.log(userData)
  if(allowRoles && !allowRoles.includes(userData.user.role)){
    return <Navigate to="/" replace></Navigate>
  }


  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login"

  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-100">
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/register" element={<ProtectedRoute allowRoles="admin"><Register /></ProtectedRoute>} />
          <Route path="/contest" element={<ProtectedRoute><Contest /></ProtectedRoute>} />
          <Route path="/assignments" element={<ProtectedRoute><Assignments /></ProtectedRoute>} />
          <Route path="/timetable" element={<ProtectedRoute><Timetable /></ProtectedRoute>} />
          <Route path="/fee" element={<ProtectedRoute><Fee /></ProtectedRoute>} />
          <Route path="/notice" element={<ProtectedRoute><Notice /></ProtectedRoute>} />
          <Route path="/class" element={<ProtectedRoute><Class /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>} />
          <Route path="/addcontest" element={<ProtectedRoute allowRoles="teacher"><AddContest /></ProtectedRoute>} />
          <Route path="/addnotice" element={<ProtectedRoute allowRoles="teacher"><AddNotice /></ProtectedRoute>} />
          <Route path="/features" element={<ProtectedRoute><Features /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
