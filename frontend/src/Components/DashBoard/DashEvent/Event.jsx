import React, { useState, useEffect } from 'react'
import RegisterEvent from './RegisterEvent'
import axios from 'axios'
import { getAuthHeaders } from '../../../Utils/auth';
// import gsap from 'gsap'

function Event({ event , registeredEevents , setMoveToLast , already__ }) {
    const [showBox, setShowBox] = useState(false)
    const [imgLoaded, setImgLoaded] = useState(false)
    const [alreadyRegistered , setAlreadyRegistered] = useState(false)

    async function handleSavedEvents() {
        try {
            const res = await axios.post("http://localhost:5000/event/save", {
                username: localStorage.getItem("username"),
                eventName: event.eventName,
            }, {
                headers: getAuthHeaders(),
            })
            if (!res.data) throw new Error("Internal Server Error");
            alert( res.data.message )
        } catch (error) {
            console.log(error)
        }
    }
    async function handleLikedEvents() {
        try {
            const res = await axios.post("http://localhost:5000/event/like", {
                username: localStorage.getItem("username"),
                eventName: event.eventName,
            }, {
                headers: getAuthHeaders(),
            })
            if (!res.data) throw new Error("Internal Server Error");
            alert( res.data.message )
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(registeredEevents){
            setAlreadyRegistered(registeredEevents.some((e) => e === event.eventName))
        }
    }, [registeredEevents, event.eventName])

    return (
        <>
            {showBox && <RegisterEvent event={event} setShowBox={setShowBox} showBox={showBox} />}
            <div
                className="eventWrapper"
                style={{ display: imgLoaded ? 'block' : 'none' }}
            >
                <div className="eventContainer flex">
                    <div className="events-event flex">
                        <div className="image-left-event flex">
                            <img
                                className='eventImage-event'
                                src={`/${event.image}`}
                                alt="Event"
                                onLoad={() => setImgLoaded(true)}
                                onError={() => setImgLoaded(true)}
                            />
                            <span className='typeOfEvent'>{event.eventType}</span>
                        </div>
                        <div className="rightEventDescription flex">
                            <div className="description-event">
                                {event.description}
                            </div>
                            <div className="extra-info-event flex">
                                <span>Bachelor of Technology</span>
                                <span>Host: <b className='hostName'>{event.hostName}</b></span>
                            </div>
                            <div className="registerSavedLikedCross flex">
                                <button onClick={() => setShowBox(!showBox)} id={`${alreadyRegistered ? "disable" : null}`} className={`RegisterButton`}>{ 
                                    alreadyRegistered || already__ ? "Already Registered" : "Register"
                                }</button>
                                <div className="likedSavedCross flex">
                                    <i onClick={handleSavedEvents} className='fa-solid fa-bookmark save-bookmark'>
                                        <span className='div-of-hover'>Save</span>
                                    </i>
                                    <i onClick={handleLikedEvents} className='fa-solid fa-heart save-bookmark'>
                                        <span className='div-of-hover'>Like</span>
                                    </i>
                                    <i onClick={() => setMoveToLast(event)} className='fa-solid fa-xmark save-bookmark'>
                                        <span className='div-of-hover'>Cross</span>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event
