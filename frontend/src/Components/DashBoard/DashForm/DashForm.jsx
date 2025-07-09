import React, { useState } from 'react'
import axios from 'axios'
import "./LeftDashForm.css"
import DashNav from '../DashComponent/DashNav'
import DashSideBar from '../DashComponent/DashSideBar'
import LeftDashForm from './LeftDashForm';
import RightDashForm from './RightDashForm';

function DashForm() {
  const [eventData, setEventData] = useState({});
  const [message, setMessage] = useState("");

  const handleEventChange = (field, value) => {
    setEventData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const {
        eventName,
        eventType,
        description,
        day,
        month,
        year,
        hour,
        minute,
        ampm,
        venue,
        limitedSeats,
        seatCount,
        volunteers,
        chiefGuest,
        specialMembers
      } = eventData;

      const date = year && month && day ? `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}` : undefined;
      const time = hour && minute && ampm ? `${hour.padStart(2, '0')}:${minute.padStart(2, '0')} ${ampm}` : undefined;

      const volunteersArr = volunteers ? volunteers.split(/,|\n/).map(v => v.trim()).filter(Boolean) : [];
      const specialMembersArr = specialMembers ? specialMembers.split(/,|\n/).map(v => v.trim()).filter(Boolean) : [];

      const payload = {
        eventName,
        eventType,
        description,
        date,
        time,
        venue,
        limitedSeats: !!limitedSeats,
        seatCount: seatCount ? Number(seatCount) : undefined,
        volunteers: volunteersArr,
        chiefGuest,
        specialMembers: specialMembersArr,
        hostName : "Anshul",
        image : "workshop.png"
      };
      console.log(payload);
      await axios.post('http://localhost:5000/event', payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Event created successfully!');
      setEventData({});
    } catch (err) {
      console.log(err.message)
      setMessage('Failed to create event');
    }
  };

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
                <div className="head-sec flex">
                    <i className="fa-solid fa-arrows-turn-right"></i>
                    <h1>Event Information</h1>
                </div>
                <form className="form-detail-sec flex" onSubmit={handleCreateEvent}>
                    <section className="left-info-sec flex">
                        <LeftDashForm eventData={eventData} onEventChange={handleEventChange} />
                    </section>
                    <div className="center-line"></div>
                    <section className="right-info-sec flex">
                        <RightDashForm eventData={eventData} onEventChange={handleEventChange} />
                    </section>
                    <button type="submit" className="create-event-btn">Create Event</button>
                    {message && <div className="event-message">{message}</div>}
                </form>
            </section>
        </div>
    </>
  )
}

export default DashForm
