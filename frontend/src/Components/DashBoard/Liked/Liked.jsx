import React, { useEffect, useRef, useState } from 'react'
import "../Liked/Liked.css"
import backarrow from "/backarrow.png"
import { gsap } from 'gsap'
import LikedEvents from '../Liked/LikedEvents'
import axios from 'axios'

function Saved({ class__, showLiked, onClose }) {
    const reference = useRef(null)
    const [savedEvents, setSavedEvents] = useState(null)

    useEffect(() => {
        async function handleGetAllSavedEvents() {
            try {
                const res = await axios.get("http://localhost:5000/user/liked?username=Anshul")
                setSavedEvents(res.data)
            } catch (error) {
                console.error("Error fetching saved events:", error)
            }
        }
        handleGetAllSavedEvents()
    }, [])

    useEffect(() => {
        if (showLiked && reference.current) {
            gsap.fromTo(reference.current,
                { opacity: 0, y: -100 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" });
        }
    }, [showLiked]);

    const handleFadeOut = () => {
        if (reference.current) {
            gsap.to(reference.current, {
                opacity: 0,
                y: -100,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    onClose()
                }
            })
        }
    }

    return (
        <>
            {
                showLiked &&
                <div ref={reference} className={`liked-ka-dabba flex ${class__}`}>
                    <section className="heading-section flex" onClick={handleFadeOut}>
                        <img src={backarrow} className='liked-back-arrow' />
                        <pre className='liked-text'> Liked</pre>
                        <pre className='event-text'> Event</pre>
                    </section>

                    <section className="liked-content-section flex">
                        {
                            savedEvents === null ? (
                                <p className='loading-text'>Loading saved events...</p>
                            ) : savedEvents.length > 0 ? (
                                savedEvents.map((v, i) => (
                                    <LikedEvents key={i} v={v} />
                                ))
                            ) : (
                                <p className='no-saved-text'>No saved events found.</p>
                            )
                        }
                    </section>
                </div>
            }
        </>
    )
}

export default Saved
