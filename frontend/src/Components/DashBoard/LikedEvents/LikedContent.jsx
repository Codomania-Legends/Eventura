import React, { useState } from 'react';
import "./LikedEvents.css"
import backArrow from "/backarrow.png"
import workshop2 from "/workshop2.jpg"
function LikedContent() {
  const [unActive, setUnActive] = useState(false);
  return (
    <>
        <div className={liked-contents flex${unActive ? ' fade-out' : ''}}>
          <section className="liked-con-heading flex">
            <img onClick={() => setUnActive(true)} className='back-arrow' src={backArrow} alt="" />
            <span className="liki">Liked</span>
            <span className="evei">Events</span>
          </section>
          <section className="liked-events-details">
            <div className="detailed-content flex">
              <div className="content-ka-baksa flex">
                <img src={workshop2} alt="" className="detailed-ka-img" />
                <section className="heading-side flex">
                  <h1 className='Event-Headings'>Eveista</h1>
                  <span className='Event-Sub-Head flex'>Workshop</span>
                </section>
                <section className="details-side flex">
                  <div className="registering-div flex">
                    <button className="registered-there">Registered</button>
                    <div className="time-left flex">766</div>
                    <div className="cross-icon flex"><i class="fa-solid fa-xmark"></i></div>
                    
                  </div>
                  <div className="people-registered flex">
                    
                    <span>2y7384</span>
                    <div className="bell-icon flex"><i class="fa-solid fa-bell"></i></div>
                    
                  </div>
                  <div className="event-host-name flex">
                    <span>jdhhfghf</span>
                    <div className="register-ago flex">dfdg</div>
                  </div>
                </section>
              </div>
            </div>
            
          </section>
        </div>
    </>
  )
}

export default LikedContent
