import React from 'react'

function RegisterEvent({event}) {
  return (
    <div className="registerEventContainer flex">
        <div className="registerDiv flex">
          <img className='image-event' src={`/${event.image}`} />
          <div className="description-register">
              <div className="eventName-register">{event.name}</div>
              <div className="description-register">{event.description}</div>
              <div className="hostName-register">{event.hostName}</div>
              <div className="eventType-register">{event.eventType}</div>
              <div className="eventDate-register">{event.date} , {event.time}</div>
              <div className="eventDuration-register">{event.duration}</div>
              <div className="venue-register">{event.venue}</div>
              <ul className="outlines-register">
                  { event.eventOutlines.map( (v) => (<li>{v}</li>) ) }
              </ul>
              <ul className="specialMembers-register">
                  { event.specialMembers.map( (v) => (<li>{v}</li>) ) }
              </ul>
          </div>
          <div className="totalRegistrations">{event.total_r}</div>
          <button>Register</button>
        </div>
    </div>
  )
}

export default RegisterEvent
