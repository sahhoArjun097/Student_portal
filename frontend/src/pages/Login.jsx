import { useState,  } from "react";
// import { Context } from "../main";
import axios from "axios";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/authSlice"
import { useNavigate } from "react-router-dom";

function Login() {
  // const { setUser } = useContext(Context);
  // const userData = useSelector((state)=>state.authSlice.userdata)
  const navigate = useNavigate()
  const dispatch  = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
  
    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/login", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
  
      if (response.data.success) {
        
       
        setMessage("Login successful!");
        dispatch(addUser(response.data)); // Ensure only user data is stored
        navigate("/");
      } else {
        setMessage(response.data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
  
      // Extract error message from backend response
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };
  
  return (
    <div className="w-full flex relative">
      <div className="w-1/2 min-h-screen relative hidden md:block">
        <video
          className="top-0 left-0 w-full h-full object-cover"
          src="/globe.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="container">
            <div className="content">
              <div className="content__container">
                <p className="content__container__text">
                  Hello
                </p>
                <ul className="content__container__list">
                  <li className="content__container__list__item">world!</li>
                  <li className="content__container__list__item">Students!</li>
                  <li className="content__container__list__item">Teachers!</li>
                  <li className="content__container__list__item">Admin!</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full min-h-screen  md:w-1/2 flex items-center justify-center bg-white p-8 rounded-lg shadow-lg">
        <div className="w-full max-w-sm ">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          {message && <p className="text-center text-red-500">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
