import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./DashForm.css"
import DashNav from '../DashComponent/DashNav'
import DashSideBar from '../DashComponent/DashSideBar'
import gsap from 'gsap'

function DashForm() {
  const [eventDetails , setEventDetails] = useState(
    {
      eventName : "",
      eventType : "",
      description : "",
      date : "",
      time : "",
      venue : "",
      duration : "",
      limitedSeats : "",
      hostName : localStorage.getItem("username"),
      impressions : "",
      image : "",
      volunteers : "",
      chiefGuest : "",
      specialMembers : "",
      eventOutlines : "",
      registrations : "",
      total_r : 0,
    }
  )
  async function handleHostAnEvent() {
    try {
      const res = await axios.post("http://localhost:5000/event" ,{ ...eventDetails } ,
        { headers : {Authorization : `Bearer ${localStorage.getItem("token")}`} } )
      alert(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( () => {
    gsap.fromTo( ".detailed-form-content",
       { opacity : 0 , y : -250 },
       { opacity : 1 , y : 0 },
     )
  } , [] )

  useEffect( () => {
    gsap.fromTo( ".eventContainer" , 
        { opacity : 0 , x : -20 , y : -20 },
        { opacity : 1 , x : 0 , y : 0 },
    )
    
  } , [] )
  
  return (
    <>
        <div className="dashbody flex">
          <section className="sidebar-dash flex">
            <DashSideBar active={3}/>
          </section>
            <section className="content-dash flex">
              <div className="navbar-dash-body">
                <DashNav />
              </div>
              <div className="detailed-form-content flex">
                <div className="formcontent-baksa flex">
              {/* <form method='post'>  */}
              <section className="left-form-sec flex">

                <div className="event-name-input-box event-input-dabba  flex">
                  <input 
                    value={eventDetails.eventName}
                    onChange={(e) => setEventDetails( {...eventDetails , eventName : `${e.target.value}`} )} 
                    type="text" 
                    placeholder='Event Name' 
                    className="event-input-boxx" />
                </div>

                <div className="event-type-input-box event-input-dabba   flex">
                  <input 
                    value={eventDetails.eventType}
                    onChange={(e) => setEventDetails( {...eventDetails , eventType : `${e.target.value}`} )} 
                    type="text" 
                    placeholder='Event Type' 
                    className="event-input-boxx" />
                </div>

                <div className="event-description-input-box event-input-dabba flex">
                  <input 
                    value={eventDetails.description}
                    onChange={(e) => setEventDetails( {...eventDetails , description : `${e.target.value}`} )} 
                    type="text" 
                    placeholder='Event Description' 
                    className="event-input-boxx" />
                </div>

                <div className="event-date-time-input-box flex">
                  <div className="event-date-input-box flex">
                    <input 
                      value={eventDetails.date}
                      onChange={(e) => setEventDetails( {...eventDetails , date : e.target.value} )} 
                      type="date" 
                      className="event-input-boxx event-input-datu" />
                    <i className="fa-solid fa-calendar calendar-icon"></i>
                  </div>
                  <div className="event-time-input-box flex">
                    <input 
                      value={eventDetails.time}
                      onChange={(e) => setEventDetails( {...eventDetails , time : e.target.value} )} 
                      type="time" 
                      className="event-input-boxx event-input-datu" />
                    <i className="fa-solid fa-clock clock-icon"></i>
                  </div>
                </div>

                <div className="event-venue-input-box event-input-dabba flex">
                  <input 
                    value={eventDetails.venue}
                    onChange={(e) => setEventDetails( {...eventDetails , venue : `${e.target.value}`} )} 
                    type="text" 
                    placeholder='Event Venue' 
                    className="event-input-boxx" />
                </div>
                <div className="event-seat flex">
                  <div className="yexx-boxx flex">
                    <input 
                      type="checkbox"
                      checked={eventDetails.limitedSeats === "yes"}
                      onChange={() => setEventDetails({...eventDetails, limitedSeats: "yes"})}
                    />
                    <span>Yess</span>
                  </div>
                  <div className="no-boxx flex">
                    <input 
                      type="checkbox"
                      checked={eventDetails.limitedSeats === "no"}
                      onChange={() => setEventDetails({...eventDetails, limitedSeats: "no"})}
                    />
                    <span>No</span>
                  </div>
                  <div className="option-wala-drop flex">
                    <span>If yes than count:   </span>
                    <select 
                      name="seat" 
                      className='select-num'
                      value={eventDetails.duration}
                      onChange={e => setEventDetails({...eventDetails, duration: e.target.value})}
                      disabled={eventDetails.limitedSeats !== "yes"}
                    >
                      {
                        [...Array(50)].map( (_,i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ) )
                      }
                    </select>
                  </div>
                </div>
              </section>
              <section className="right-form-sec flex">
                <div className="event-volunteer-input-box event-input-dabba flex">
                  <input 
                    value={eventDetails.volunteers}
                    onChange={e => setEventDetails({...eventDetails, volunteers: e.target.value})}
                    type="text" 
                    placeholder='Event Volunteers Names' 
                    className="event-input-boxx" />
                </div>
                <div className="event-cheif-input-box event-input-dabba flex">
                  <input 
                    value={eventDetails.chiefGuest}
                    onChange={e => setEventDetails({...eventDetails, chiefGuest: e.target.value})}
                    type="text" 
                    placeholder='Event Cheif Guests Names' 
                    className="event-input-boxx" />
                </div>
                <div className="event-special-input-box event-input-dabba flex">
                  <input 
                    value={eventDetails.specialMembers}
                    onChange={e => setEventDetails({...eventDetails, specialMembers: e.target.value})}
                    type="text" 
                    placeholder='Event Special Members Names' 
                    className="event-input-boxx" />
                </div>
                <div className="event-outline-input-box flex">
                  <input 
                    type="file" 
                    placeholder='Upload' 
                    className="event-outline"
                    onChange={e => setEventDetails({...eventDetails, eventOutlines: e.target.files[0]})}
                  />
                </div>
                <div className="submit-button flex">
                  <button onClick={handleHostAnEvent} className="submitti-btn">Submit <i className="fa-solid fa-paper-plane"></i></button>
                </div>
              </section>
                </div>

              </div>
            </section>
        </div>
    </>
  )
}

export default DashForm
