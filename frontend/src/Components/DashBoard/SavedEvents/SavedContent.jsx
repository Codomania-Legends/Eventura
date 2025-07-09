import React from 'react';
import './SavedEvents.css';
import backArrow from '/backarrow.png';

import workshop2 from '../../assets/workshop2.jpg';
import eve from '../../assets/eve.jpg';
import eveista from '../../assets/eveista.jpg';
import workshop from '../../assets/workshop.jpg';
import workshop1 from '../../assets/workshop1.jpg';

import { Data } from '../../Data/Data.jsx';

// Map filenames to image imports
const imageMap = {
  'workshop2.jpg': workshop2,
  'eve.jpg': eve,
  'eveista.jpg': eveista,
  'workshop.jpg': workshop,
  'workshop1.jpg': workshop1
};

function SavedContent() {
  return (
    <div className="saved-contents flex">
      {/* Heading */}
      <section className="saved-con-heading flex">
        <img className="back-arrow" src={backArrow} alt="Back" />
        <span className="savi">Saved</span>
        <span className="evei">Events</span>
      </section>

      {/* Events List */}
      <section className="saved-events-details">
        {Data.map((event) => (
          <div className="detailed-content flex" key={event.id}>
            <div className="content-ka-baksa flex">
              <img
                src={imageMap[event.image] || eve}
                alt={event.eventName}
                className="detailed-ka-img"
                onError={(e) => { e.target.onerror = null; e.target.src = eve; }}
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
