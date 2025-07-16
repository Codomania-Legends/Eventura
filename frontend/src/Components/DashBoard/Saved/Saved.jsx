import React, { useEffect, useRef, useState } from 'react'
import "../Liked/Liked.css"
import backarrow from "/backarrow.png"
import {Data} from "../../Data/Data"
import {gsap} from 'gsap'
function Saved({class__, visible, onClose}) {
    const [fadeout, setFadeout] = useState(false)
    const reference = useRef(null)
    useEffect( () => {
        if( visible && reference.current ){
            gsap.fromTo( reference.current, 
                { opacity : 0, y : -100, duration : 1, ease : "power2.inOut" },
                { opacity : 1, y : 0, duration : 1, ease : "power2.inOut" } )
        }
    }, [visible] )

    const handleFadeOut = () => {
    if(reference.current) {
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
            visible &&
            <div ref={reference} 
            className={`liked-ka-dabba flex ${fadeout ? "fade" : ""}`}>
                <section className="heading-section flex"
                
                onClick={handleFadeOut}>
                    <img src={backarrow} className='liked-back-arrow' />
                    <pre className='liked-text'> Saved</pre>
                    <pre className='event-text'> Event</pre>
                </section>
                <section className="liked-content-section flex">
                    {
                        Data.map(( v, i ) => (
                            <div className='liked-detail-content flex'>
                                <section className="liked-img-sec flex">
                                    <img src={v.image} className="liked-image-dabba flex"/>
                                    <div className="liked-image-event-name flex">
                                        <div className="li-event-name flex">
                                            <span className="liked-event-name">{v.eventName}</span>
                                        </div>
                                        <div className="li-event-type flex">
                                            <span className="liked-event-type"> {v.eventType} </span>
                                        </div>
                                    </div>
                                </section>
                                <section className="liked-info-section flex">
                                    <div className="liked-registered-and-cancel flex">
                                        <div className="registered-button flex">
                                            <button className="regis-btn">{v.status}</button>
                                        </div>
                                        <div className="days-left flex">{v.daysLeft}</div>
                                        <div className="cancel-icon flex"><i class="fa-solid fa-xmark" style={{color: "#001329;"}}></i></div>
                                    </div>
                                    <div className="people-register flex">
                                        <div className="total-people-regis flex">{v.registeredPeople}</div>
                                        <div className="bell-icon flex"><i class="fa-regular fa-bell" style={{color: "#001329;"}}></i></div>
                                    </div>
                                    <div className="host-name-liked flex">
                                        <div className="host-name-like flex">{v.hostName}</div>
                                        <div className="Liked-hrs-ago flex">{v.likedAgo}</div>
                                    </div>
                                </section>
    
                            </div>
                        ))
                    }
    
                </section>
            </div>
        }
        
    </>
  )
}

export default Saved