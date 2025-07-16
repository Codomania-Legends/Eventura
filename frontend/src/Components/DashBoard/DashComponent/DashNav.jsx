import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import gsap from "gsap"
import Liked from "../Liked/Liked"
import "../Liked/Liked.css"
function DashNav() {
    const [ liked, setLiked ] = useState(false)
    useEffect( () => {
        const timeLine = gsap.timeline()
        timeLine.fromTo( ".animateNav-dashboard" , 
        {
            opacity : 0,
            x : -10,
            y : -10, 
            duration : 0.5
        } , {
            opacity : 1,
            x : 0 , y : 0,
            duration : 0.5
        } )
    } , [] )
    const navigate = useNavigate({name})
    return (
        <nav className='navbar-dash flex'>
            <div className="logo-dash flex">
                <img src="/black-logo.png" className='EventLogo animateNav-dashboard' alt="EventLogo" />
            </div>
            <div className="blog-dash flex animateNav-dashboard" onClick={() => navigate("/blog")}>
                <i class="fa-solid fa-blog"></i>
                <span className='marginNavbar-dash'>Blogs</span>
            </div>
            <div className="search-dash flex animateNav-dashboard">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input className='searchInputEvent' type="text" placeholder='Search any Event' />
            </div>
            <div className="saved-dash flex animateNav-dashboard">
                <i class="fa-solid fa-bookmark"></i>
                <span className='marginNavbar-dash'>Saved</span>
            </div>
            <div className="liked-dash flex animateNav-dashboard" onClick={() => setLiked(!liked)}>
                <i class="fa-solid fa-heart"></i>
                <span className='marginNavbar-dash'>Liked</span>
            </div>
            <div className="welcome-dash animateNav-dashboard flex">
                <span style={{"textAlign" : "left","width":"100%"}}>Welcome,</span>
                <span style={{"textAlign" : "right","width":"100%"}}>
                    <b>{localStorage.getItem("username")}</b>
                </span>
            </div>
            {/* <SavedEvents visible={savedActive} class__={savedActive ? "savedActive" : "savedUnActive"}/> */}
            {/* <LikedEvents visible={likedActive} class__={likedActive ? "likedActive" : "likedUnActive"} /> */}
            <Liked visible={liked} class__={liked ? "likedActive" : "likedUnActive"} onClose={() => setLiked(false)} />
        </nav>
    )
}

export default DashNav
