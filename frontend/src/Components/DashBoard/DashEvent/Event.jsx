import React from 'react'

function Event({event}) {
  return (
    <div className="eventContainer flex">
        <div className="events-event flex">
            <div className="image-left-event flex">
                <img className='eventImage-event' src={`/${event.image}`} alt="Event Image" />
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
  )
}

export default Event
