import React from 'react'

function Event() {
  return (
    <div className="eventContainer flex">
        <div className="events-event flex">
            <div className="image-left-event flex">
                <img className='eventImage-event' src="/workshop.png" alt="Event Image" />
                <span className='typeOfEvent'>Workshop</span>
            </div>
            <div className="rightEventDescription flex">
                <div className="description-event">
                    AI Powered Workshop with Anshul Vishwakarma
                </div>
                <div className="extra-info-event flex">
                    <span>Bachelor of Technology</span>
                    <span>Host: <b className='hostName'>Anshul Vishwakarma</b></span>
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
