import React from 'react'
import "./LeftDashForm.css"
function LeftDashForm(){
    return(
        <>
            <div className="form-event-name flex">
                <span>Event Name</span>
                <input type="text" placeholder='Enter Event Name' className="formeventname" />
            </div>
            <div className="form-event-type flex">
                <span>Event Type</span>
                <input type="text" placeholder='Enter Event Type' className="formeventtype" />
            </div>
            <div className="form-event-description flex">
                <span>Event Description</span>
                <textarea placeholder='Enter Event Description....' className="formeventdescription"></textarea>
            </div>
            <div class="date-inputs flex">
                <span>Event Date</span>
                <div className="date-input-ka-dabba flex">
                    <div class="form-input-box flex">
                        <input type="text" className='calender-input' placeholder="DD" maxlength="2" />
                        <span class="icon"><i class="fa-solid fa-calendar" style={{color: "#ffffff"}}></i></span>
                    </div>
                    <div class="form-input-box flex">
                        <input type="text" className='calender-input' placeholder="MM" maxlength="2" />
                        <span class="icon"><i class="fa-solid fa-calendar" style={{color: "#ffffff"}}></i></span>
                    </div>
                    <div class="form-input-box flex">
                        <input type="text" className='calender-input' placeholder="YYYY" maxlength="4" />
                        <span class="icon"><i class="fa-solid fa-calendar" style={{color: "#ffffff"}}></i></span>
                    </div>
                </div>
            </div>

            <div className="form-event-time flex">
                <span className="section-title">Event Time</span>
                <div className="form-time-container flex">
                    <div className="form-time-box flex">
                        <input type="text" placeholder="HH" maxlength="2" className="time-input-baksa" />
                        </div>
                        <div className="form-colon">:</div>
                    <div className="form-time-box flex">
                        <input type="text" placeholder="MM" maxlength="2" className="time-input-baksa" />
                    </div>

                    <div className="form-am-pm flex">
                        <button className="form-am">AM</button>
                        <button className="form-pm">PM</button>
                    </div>
                </div>
            </div>
            <div className="form-event-venue flex">
                <span>Event Venue</span>
                <input type="text" placeholder='Enter Event Venue' className="formeventvenue" />
            </div>
        </>
    )
}

export default LeftDashForm