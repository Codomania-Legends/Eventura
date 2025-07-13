import React from 'react'

function RegisterEvent({event}) {
  return (
    <div className="registerEventContainer flex">
        <div className="registerDiv flex">
          <img className='image-event' src={`/${event.image}`} />
          <div className="descriptionDiv-register">
              <div className="eventName-register">{event.eventName}</div>
              <div className="description-register">{event.description}</div>
              <div className="hostName-register"><b>By:</b> {event.hostName}</div>
              <div className="eventType-register"><b>Type: </b>{event.eventType}</div>
              <div className="eventDate-register"><b>Date:</b> {new Date(event.date).toLocaleDateString()}, <b>At:</b> {event.time}</div>
              <div className="eventDuration-register"><b>Duration:</b> {event.duration}</div>
              <div className="venue-register"><b>Venue:</b> {event.venue}</div>
              <div className="Outlines"><b>Outlines</b></div>
              <ul className="outlines-register">
                  { event.eventOutlines.map( (v) => (<li>{v}</li>) ) }
              </ul>
              <ul className="specialMembers-register">
                  { event.specialMembers.map( (v) => (<li>{v}</li>) ) }
              </ul>
          </div>
          <div className="totalRegistrations"><b>Total Registrations:</b> {event.total_r}</div>
          <button className='Button-registration'>Register</button>
        </div>
    </div>
  )
}

export default RegisterEvent
