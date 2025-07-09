import React, { useState } from 'react';
import './SavedEvents.css';
import backArrow from '/backarrow.png';

import workshop2 from '/workshop2.jpg';

import { Data } from '../../Data/Data.jsx';



function SavedContent() {
  const [unActive, setUnActive] = useState(false);

  return (
    <div className={`saved-contents flex${unActive ? ' fade-out' : ''}`}>
      {/* Heading */}
      <section className="saved-con-heading flex">
        <img
          onClick={() => setUnActive(!unActive)}
          className="back-arrow"
          src={backArrow}
          alt="Back"
        />
        <span className="savi">Saved</span>
        <span className="evei">Events</span>
      </section>

      {/* Events List */}
      <section className="saved-events-details">
        {Data.map((event) => (
          <div className="detailed-content flex" key={event.id}>
            <div className="content-ka-baksa flex">
              <img
                src={workshop2}
                alt={event.eventName}
                className="detailed-ka-img"
              />

              <section className="heading-side flex">
                <h1 className="Event-Headings">{event.eventName}</h1>
                <span className="Event-Sub-Head flex">{event.eventType}</span>
              </section>

              <section className="details-side flex">
                <div className="registering-div flex">
                  <button className="registered-there">{event.status}</button>
                  <div className="time-left flex">{event.timeLeft}</div>
                  <div className="cross-icon flex">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>

                <div className="people-registered flex">
                  <span>{event.registeredPeople}</span>
                  <div className="bell-icon flex">
                    <i className="fa-solid fa-bell"></i>
                  </div>
                </div>

                <div className="event-host-name flex">
                  <span>{event.hostName}</span>
                  <div className="register-ago flex">{event.registeredAgo}</div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default SavedContent;
