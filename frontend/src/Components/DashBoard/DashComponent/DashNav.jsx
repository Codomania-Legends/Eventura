import React, { useState } from 'react'
import { useNavigate } from 'react-router'
function DashNav() {
    const navigate = useNavigate({name})
    return (
        <nav className='navbar-dash flex'>
            <div className="logo-dash flex">
                <img src="/black-logo.png" className='EventLogo' alt="EventLogo" />
            </div>
            
            <div className="blog-dash flex" onClick={() => navigate("/blog")}>
                <i class="fa-solid fa-blog"></i>
                <span className='marginNavbar-dash'>Blogs</span>
            </div>
            <div className="search-dash flex">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input className='searchInputEvent' type="text" placeholder='Search any Event' />
            </div>
            <div className="saved-dash flex">
                <i class="fa-solid fa-bookmark"></i>
                <span className='marginNavbar-dash'>Saved</span>
            </div>
            <div className="liked-dash flex">
                <i class="fa-solid fa-heart"></i>
                <span className='marginNavbar-dash'>Liked</span>
            </div>
            <div className="welcome-dash flex">
                <span style={{"textAlign" : "left","width":"100%"}}>Welcome,</span>
                <span style={{"textAlign" : "right","width":"100%"}}>
                    <b>{localStorage.getItem("username")}</b>
                </span>
            </div>
            <SavedEvents visible={savedActive} class__={savedActive ? "savedActive" : "savedUnActive"}/>
            <LikedEvents visible={likedActive} class__={likedActive ? "likedActive" : "likedUnActive"} />
        </nav>
    )
}

export default DashNav
