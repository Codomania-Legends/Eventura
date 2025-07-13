import React, { useState } from 'react'
import RegisterEvent from './RegisterEvent'

function Event({ event }) {
    const [showBox, setShowBox] = useState(false)
    const [imgLoaded, setImgLoaded] = useState(false)

    return (
        <>
            {showBox && <RegisterEvent event={event} />}
            <div
                className="eventWrapper"
                style={{ display: imgLoaded ? 'block' : 'none' }}
                onClick={() => setShowBox(!showBox)}
            >
                <div className="eventContainer flex">
                    <div className="events-event flex">
                        <div className="image-left-event flex">
                            <img
                                className='eventImage-event'
                                src={`/${event.image}`}
                                alt="Event"
                                onLoad={() => setImgLoaded(true)}
                                onError={() => setImgLoaded(true)} // fallback for broken links
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
                                <button className='RegisterButton'>Register</button>
                                <div className="likedSavedCross flex">
                                    <i className='fa-solid fa-bookmark'></i>
                                    <i className='fa-solid fa-heart'></i>
                                    <i className='fa-solid fa-xmark'></i>
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
