import React, { useEffect } from 'react'
import "./DashStyles.css"
import { useNavigate } from 'react-router'
import gsap from "gsap"

function DashSideBar({active}) {
  const navigate = useNavigate()
  const activeNames = ["Home","All Events","Your Registrations","Host Event","Manage Event","Your Reminders"]
  
  useEffect( () => {
    gsap.fromTo( ".pointer-sidebar" , {
      x : -10,
      opacity : 0,
    },{
      x : 0,
      opacity : 1,
    } )
  } , [active] )
  
  useEffect( () => {
    gsap.fromTo( ".activeOptionDash",{x:-400,ease:"bounce.inOut"},{x:0,ease:"bounce.inOut"})
    gsap.fromTo( ".sideBarDashOptions",{x:-400,ease:"bounce.inOut"},{x:0,ease:"bounce.inOut"})
  } , [] )
  
  return (
    <>
      <div className="activeOptionDash flex">
        <div className='flex' style={{"width": "80%","height": "50%","justify-content": "start"}}>
          <img className='arrow-sidebar' src='/arrow.png' />
          <span><b>{activeNames[active].split(" ")[0]}</b> <i>{activeNames[active].split(" ")[1]}</i></span>
        </div>
      </div>
      <div className="sideBarDashOptions flex">
        <div className="upperDashSidebar">
          <div className="contentUpperDash-sidebar flex">
            <div onClick={() => navigate("/")} className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-house"></i>
              <span className='addMargin-sidebar'>Home</span>
              { active == 0 ? <div className='pointer-sidebar' /> : "" }
            </div>
            <div onClick={() => navigate("/dashboard/events")} className="home-sidebar sidebar-content flex">
              <i class="fa-regular fa-paper-plane"></i>
              <span className='addMargin-sidebar'>All Events</span>
              { active == 1 ? <div className='pointer-sidebar' /> : "" }
            </div>
            <div onClick={() => navigate("/dashboard/registration")} className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-chart-simple"></i>
              <span className='addMargin-sidebar'>Your Registrations</span>
              { active == 2 ? <div className='pointer-sidebar' /> : "" }
            </div>
            <div onClick={() => navigate("/dashboard/eventform")} className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-plus"></i>
              <span className='addMargin-sidebar'>Host an Event</span>
              { active == 3 ? <div className='pointer-sidebar' /> : "" }
            </div>
            <div onClick={() => navigate("/dashboard/manage")} className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-bars-progress"></i>
              <span className='addMargin-sidebar'>Manage your Event</span>
              { active == 4 ? <div className='pointer-sidebar' /> : "" }
            </div>
            {/* Upcoming Feature */}
            <div onClick={() => navigate("/dashboard/reminder") } className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-bell"></i>
              <span className='addMargin-sidebar'>Reminders</span>
              { active == 5 ? <div className='pointer-sidebar' /> : "" }
            </div>
          </div>
        </div>
        <div className="lowerDashSidebar flex">
          <div className="profile flex">
            <i class="fa-solid fa-user"></i>
          </div>
          <span>Profile</span>
        </div>
      </div>
    </>
  )
}

export default DashSideBar
