import { BrowserRouter,Routes,Route } from "react-router"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './Components/LoginSignup/Signup'
import Login from "./Components/LoginSignup/Login.jsx"
import DashEvent from "./Components/DashBoard/DashEvent/DashEvent.jsx"
import DashForm from "./Components/DashBoard/DashForm/DashForm.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard/events" element={<DashEvent />}></Route>
      <Route path="/dashboard/eventform" element={<DashForm/>}></Route>
    </Routes>
  </BrowserRouter>
)
