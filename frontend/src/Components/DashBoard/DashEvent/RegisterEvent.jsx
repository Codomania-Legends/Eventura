import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';

function RegisterEvent({event , setShowBox , showBox }) {
  async function handleRegisterEvent() {
      try{
        console.log("hello")
        const token = localStorage.getItem("token");
        const res = await axios.post(
          "http://localhost:5000/event/register",
          { 
            username: localStorage.getItem("username"),
            eventName: event.eventName
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        alert( res.data.message )
      }
      catch(err){ console.log(err.message) }
  }
  const [ regis , setRegis ] = useState(false)
  useEffect( () => {
    const username = localStorage.getItem("username")
    setRegis(event.registrations.some((user) => user === username))
  } , [] )
  return (
    <div className="registerEventContainer flex">
      <div className="imageDiv flex">
        <img className='image-event' src={`/${event.image}`} />
        <div className="div-div-div flex">
          <div className="eventName-register">{event.eventName}</div>
          <div className="eventDate-register"><b>Date:</b> {new Date(event.date).toLocaleDateString()}, <b>At:</b> {event.time}</div>
          <div className="eventDuration-register"><b>Duration:</b> {event.duration}</div>
          <div className="venue-register"><b>Venue:</b> {event.venue}</div>
          <div className="registrations-register">
            <b>Total Registrations:</b> {event.total_r}
          </div>
        </div>
      </div>
      <div className="line-register"></div>
      <div className="registerDiv flex">
        <div className="descriptionDiv-register">
          <div className="description-register"><b>Description: </b>{event.description}</div>
          <div className="hostName-register"><b>By:</b> {event.hostName}</div>
          <div className="eventType-register"><b>Type: </b>{event.eventType}</div>
          <div className="chiefGuest-register"><b>Chief Guest: </b>{event.chiefGuest}</div>
          <div className="specialMembers-register">
            <b>Special Members: </b>{event.specialMembers.map((v)=>(v))}
          </div>
          <div className="Outlines">
            <b>Outlines</b>
            <ul className="outlines-register ul-event">
                { event.eventOutlines.map( (v) => (<li>{v}</li>) ) }
            </ul>
          </div>
          <div className="specialMember-register">
            <b>Special members</b>
            <ul className="specialMembers-register ul-event">
                { event.specialMembers.map( (v) => (<li>{v}</li>) ) }
            </ul>
          </div>
        </div>
      </div>
      <div className="totalRegistrations flex">
        <button 
          onClick={() => !regis ? handleRegisterEvent() : null} 
          id={`${regis ? "disable" : ""}`}
          className={`Button-registration`}
          disabled={regis}
        >
            { (regis ? "Registered" : "Register") }
        </button>
      </div>
      <i onClick={() => setShowBox(!showBox)} className='fa-solid fa-xmark cancelRegisterPage'></i>
    </div> 
  )
}

export default RegisterEvent
