import React from 'react';
import './Navbar.css'


function Navbar() {
  return (
    <>
        <main className="nav-main flex">
            <div className="nav-comp flex">
                <div className="logo flex "><img style={{"height" : "100%"}} src='/white-logo.png' /></div>
                <div className="nav-content flex">
                    <div className="home"><span>Home</span></div>
                    <div className="event"><span>Event</span></div>
                    <div className="blog"><span>Blog</span></div>
                    <div className="aboout-us"><span>About-us</span></div>
                    <div className="pricing"><span>Pricing</span></div>
                </div>
                <div className="contact-us flex"><span>Contact-us</span></div>
            </div>
        </main>
    </>
  )
}

export default Navbar