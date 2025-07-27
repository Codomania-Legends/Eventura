import React, { useEffect } from 'react';
import './Navbar.css'
import {useNavigate} from "react-router"
// import {SplitText} from "gsap/SplitText"
// import gsap from 'gsap';

// gsap.registerPlugin(SplitText)

function Navbar() {
  const navigate = useNavigate()
  useEffect( () => {
    // const split = SplitText.create(".animate_nav" , { type : "words" })
    // gsap.from( split.words , {
  //     x : -20,
  //     y : -20,
  //     opacity : 0,
  //     stagger : 0.2
  //   } )
  //   // gsap.fromTo( ".img_animate" , {
  //     x : -20,
  //     y : -20,
  //     opacity : 0
  //   },{ x:0,y:0,opacity:1 } )
  } , [] )
  return (
    <>
        <main className="nav-main flex">
            <div className="nav-comp flex">
                <div className="logo flex img_animate "><img style={{"height" : "100%"}} src='/white-logo.png' /></div>
                <div className="nav-content flex">
                    <div className="home animate_nav" onClick={() => navigate("/")}><span>Home</span></div>
                    <div className="event animate_nav" onClick={() => navigate("/dashboard/events")}><span>Event</span></div>
                    <div className="blog animate_nav" onClick={() => navigate("/blog")}><span>Blog</span></div>
                    <div className="aboout-us animate_nav" onClick={() => navigate("/blog")}><span>About-us</span></div>
                    <div className="dashboard animate_nav" onClick={() => navigate("/dashboard/events")}><span>Dashboard</span></div>
                </div>
                <div className="contact-us flex animate_nav" onClick={
                      () => navigate("/login")
                  }><span>{ localStorage.getItem("username") && localStorage.getItem("token") ? localStorage.getItem("username") : "Login" }</span></div>
            </div>
        </main>
    </>
  )
}

export default Navbar
