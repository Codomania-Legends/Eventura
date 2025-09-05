import React from "react"
import { BrowserRouter,Routes,Route } from "react-router"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './Components/LoginSignup/Signup'
import Login from "./Components/LoginSignup/Login.jsx"
import DashEvent from "./Components/DashBoard/DashEvent/DashEvent.jsx"
import DashForm from "./Components/DashBoard/DashForm/DashForm.jsx"
import ManageEvent from "./Components/DashBoard/DashManageEvent/ManageEvent.jsx"
import Blog from "./Components/Blog/Blog.jsx"
import Reminder from "./Components/DashBoard/Reminder/Reminder.jsx"
import YourRegistrations from "./Components/DashBoard/DashYourRegistration/YourRegistrations.jsx"
import SHow from "./Components/Certificate/SHow.jsx"
import DashboardComponent from "./Utils/DashboardComponent.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<DashboardComponent />}>
        <Route path="/events" element={<DashEvent />}></Route>
        <Route path="/eventform" element={<DashForm/>}></Route>
        <Route path="/manage" element={<ManageEvent/>}></Route>
        <Route path="/reminder" element={<Reminder/>}></Route>
        <Route path="/registration" element={<YourRegistrations/>}></Route>
      </Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/t" element={<SHow />}></Route>
    </Routes>
  </BrowserRouter>
)

if( "serviceWorker" in navigator ){
  window.addEventListener( "load" , () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then( (reg) => console.log("Registerd", reg) )
      .catch( (err) => console.log("Not-Registerd", err) )
  } )
}
