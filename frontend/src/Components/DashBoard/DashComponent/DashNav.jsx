import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import gsap from "gsap"
import Liked from "../Liked/Liked"
import "../Liked/Liked.css"
import Saved from '../Saved/Saved'

function DashNav() {
    const [showLiked, setShowLiked] = useState(false)
    const [showSaved, setShowSaved] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (showLiked) setShowSaved(false)
        if (showSaved) setShowLiked(false)
    }, [showLiked, showSaved])

    // useEffect(() => {
    //     const timeLine = gsap.timeline()
    //     timeLine.fromTo(".animateNav-dashboard",
    //         {
    //             opacity: 0,
    //             x: -10,
    //             y: -10,
    //             duration: 0.5
    //         },
    //         {
    //             opacity: 1,
    //             x: 0,
    //             y: 0,
    //             duration: 0.5
    //         })
    // }, [])

    return (
        <nav className='navbar-dash flex'>
            <div className="logo-dash flex">
                <img src="/black-logo.png" className='EventLogo animateNav-dashboard' alt="EventLogo" />
            </div>

            <div className="blog-dash flex animateNav-dashboard" onClick={() => navigate("/blog")}>
                <i className="fa-solid fa-blog"></i>
                <span className='marginNavbar-dash'>Blogs</span>
            </div>

            <div className="search-dash flex animateNav-dashboard">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className='searchInputEvent' type="text" placeholder='Search any Event' />
            </div>

            <div className="saved-dash flex animateNav-dashboard" onClick={() => setShowSaved(!showSaved)}>
                <i className="fa-solid fa-bookmark"></i>
                <span className='marginNavbar-dash'>Saved</span>
            </div>

            <div className="liked-dash flex animateNav-dashboard" onClick={() => setShowLiked(!showLiked)}>
                <i className="fa-solid fa-heart"></i>
                <span className='marginNavbar-dash'>Liked</span>
            </div>

            <div className="welcome-dash animateNav-dashboard flex">
                <span style={{ textAlign: "left", width: "100%" }}>Welcome,</span>
                <span style={{ textAlign: "right", width: "100%" }}>
                    <b>{localStorage.getItem("username")}</b>
                </span>
            </div>

            <Liked
                showLiked={showLiked}
                setShowLiked={setShowLiked}
                class__={showLiked ? "likedActive" : "likedUnActive"}
                onClose={() => setShowLiked(false)}
            />

            <Saved
                showSaved={showSaved}
                setShowSaved={setShowSaved}
                class__={showSaved ? "savedActive" : "savedUnActive"}
                onClose={() => setShowSaved(false)}
            />
        </nav>
    )
}

export default DashNav


// useEffect(() => {
    //     async function handleGetAllLikedEvents() {
    //         try {
    //             const res = await axios.get("http://localhost:5000/user/liked?username=Anshul")
    //             setLikedEvents(res.data)
    //         } catch (error) {
    //             console.error("Error fetching liked events:", error)
    //             setLikedEvents([])
    //         }
    //     }
    //     handleGetAllLikedEvents()
    // }, [])
