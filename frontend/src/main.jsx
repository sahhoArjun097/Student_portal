import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Store from './utils/Store.js'
import { Provider } from "react-redux";

export const Context = createContext();
const AppWrapper = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; 
  });

  const toggleMode = () => {
    const newMode = darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);


  return (
    <Context.Provider value={{ darkMode, setDarkMode, toggleMode }}>
       <Provider store={Store}>
        <App />
      </Provider>
    </Context.Provider>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
