import React, { useState } from 'react'
import axios from 'axios'
import "./DashForm.css"
import DashNav from '../DashComponent/DashNav'
import DashSideBar from '../DashComponent/DashSideBar'

function DashForm() {
  return (
    <>
        <div className="dashbody flex">
          <section className="sidebar-dash flex">
            <DashSideBar />
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
                      <input type="text" placeholder='Event Name' className="event-input-boxx" />
                    </div>

                    <div className="event-type-input-box event-input-dabba   flex">
                      <input type="text" placeholder='Event Type' className="event-input-boxx" />
                    </div>

                    <div className="event-description-input-box event-input-dabba flex">
                      <input type="text" placeholder='Event Description' className="event-input-boxx" />
                    </div>

                    <div className="event-date-time-input-box flex">
                      <div className="event-date-input-box flex">
                        <input type="date" className="event-input-boxx" />
                      </div>
                      <div className="event-time-input-box flex">
                        <input type="time" className="event-input-boxx" />
                      </div>
                    </div>

                    <div className="event-venue-input-box event-input-dabba flex">
                      <input type="text" placeholder='Event Venue' className="event-input-boxx" />
                    </div>
                    <div className="event-seat flex">
                      <div className="yexx-boxx flex">
                        <input type="checkbox" />
                        <span>Yess</span>
                      </div>
                      <div className="no-boxx flex">
                        <input type="checkbox" />
                        <span>No</span>
                      </div>
                      <div className="option-wala-drop flex">
                        <span>If yes than count:   </span>
                        <select name="seat" className='select-num'>
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
                      <input type="text" placeholder='Event Volunteers Names' className="event-input-boxx" />
                    </div>
                    <div className="event-cheif-input-box event-input-dabba flex">
                      <input type="text" placeholder='Event Cheif Guests Names' className="event-input-boxx" />
                    </div>
                    <div className="event-special-input-box event-input-dabba flex">
                      <input type="text" placeholder='Event Special Members Names' className="event-input-boxx" />
                    </div>
                    <div className="event-outline-input-box flex">
                      <input type="file" placeholder='Upload' className="event-outline" />
                    </div>
                    <div className="submit-button flex">
                      <button className="submitti-btn">Submit <i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                  </section>
                  {/* </form> */}

                </div>

              </div>
            </section>
        </div>
    </>
  )
}

export default DashForm
