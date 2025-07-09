import React from 'react'
import "./LeftDashForm.css"

function LeftDashForm({ eventData, onEventChange }) {
  // Helper to handle input changes
  const handleChange = (field) => (e) => {
    onEventChange(field, e.target.value);
  };

  return (
    <>
      <div className="form-event-name flex">
        <span>Event Name</span>
        <input type="text" placeholder='Enter Event Name' className="formeventname" value={eventData.eventName || ''} onChange={handleChange('eventName')} />
      </div>
      <div className="form-event-type flex">
        <span>Event Type</span>
        <input type="text" placeholder='Enter Event Type' className="formeventtype" value={eventData.eventType || ''} onChange={handleChange('eventType')} />
      </div>
      <div className="form-event-description flex">
        <span>Event Description</span>
        <textarea placeholder='Enter Event Description....' className="formeventdescription" value={eventData.description || ''} onChange={handleChange('description')}></textarea>
      </div>
      <div className="date-inputs flex">
        <span>Event Date</span>
        <div className="date-input-ka-dabba flex">
          <div className="form-input-box flex">
            <input type="text" className='calender-input' placeholder="DD" maxLength="2" value={eventData.day || ''} onChange={handleChange('day')} />
            <span className="icon"><i className="fa-solid fa-calendar" style={{color: "#ffffff"}}></i></span>
          </div>
          <div className="form-input-box flex">
            <input type="text" className='calender-input' placeholder="MM" maxLength="2" value={eventData.month || ''} onChange={handleChange('month')} />
            <span className="icon"><i className="fa-solid fa-calendar" style={{color: "#ffffff"}}></i></span>
          </div>
          <div className="form-input-box flex">
            <input type="text" className='calender-input' placeholder="YYYY" maxLength="4" value={eventData.year || ''} onChange={handleChange('year')} />
            <span className="icon"><i className="fa-solid fa-calendar" style={{color: "#ffffff"}}></i></span>
          </div>
        </div>
      </div>
      <div className="form-event-time flex">
        <span className="section-title">Event Time</span>
        <div className="form-time-container flex">
          <div className="form-time-box flex">
            <input type="text" placeholder="HH" maxLength="2" className="time-input-baksa" value={eventData.hour || ''} onChange={handleChange('hour')} />
          </div>
          <div className="form-colon">:</div>
          <div className="form-time-box flex">
            <input type="text" placeholder="MM" maxLength="2" className="time-input-baksa" value={eventData.minute || ''} onChange={handleChange('minute')} />
          </div>
          <div className="form-am-pm flex">
            <button className={`form-am${eventData.ampm === 'AM' ? ' selected' : ''}`} type="button" onClick={() => onEventChange('ampm', 'AM')}>AM</button>
            <button className={`form-pm${eventData.ampm === 'PM' ? ' selected' : ''}`} type="button" onClick={() => onEventChange('ampm', 'PM')}>PM</button>
          </div>
        </div>
      </div>
      <div className="form-event-venue flex">
        <span>Event Venue</span>
        <input type="text" placeholder='Enter Event Venue' className="formeventvenue" value={eventData.venue || ''} onChange={handleChange('venue')} />
      </div>
    </>
  )
}

export default LeftDashForm
