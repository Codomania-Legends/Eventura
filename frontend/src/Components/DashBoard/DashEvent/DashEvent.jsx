import React, { useEffect, useState } from 'react'
import DashNav from '../DashComponent/DashNav'
import "./EventDash.css"
import DashSideBar from '../DashComponent/DashSideBar'
import Event from './Event'
import FilterOption from './FilterOption'
import BottomFilter from './BottomFilter'
import axios from 'axios'
import { Navigate } from 'react-router'

function DashEvent() {
    const [ events , setEvents ] = useState([])
    const [ allEvents , setAll ] = useState([])
    useEffect( () => {
        async function handleGetAllEvents() {
            if( !localStorage.getItem("token") ) return Navigate("/login")
            const token = "BEARER ".concat(localStorage.getItem("token"));
            const res = await axios.get( "http://localhost:5000/event" , {
                headers: {
                    Authorization: token
                }
            } )
            if( !res.data ) throw new Error("Internal Server Error")
            setEvents(res.data)
            setAll(res.data)
        }
        handleGetAllEvents()
        console.log(events)
    } , [] )
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
                <div className="AlleventsAndFilter flex">
                    <div className="allEventsContentBody">
                        {events.length != 0 && events.map( (each) => (<Event event={each} />) )}
                    </div>
                    <div className="otherFilterOptions flex">
                        <div className="optionsFilter flex">
                            <FilterOption img={"/online-video.png"} text={"Webinar"}
                                 setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} 
                            />
                            <FilterOption img={"/seminar.png"} text={"Workshop"}
                                 setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} 
                            />
                            <FilterOption img={"/competition.png"} text={"Contests"}
                                 setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} 
                            />
                            <FilterOption img={"/hackathon.png"} text={"Hackathon"}
                                 setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} 
                            />
                            <FilterOption img={"/calendar.png"} text={"Casual Events"}
                                 setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} 
                            />
                        </div>
                    </div>
                    <BottomFilter />
                </div>
            </section>
        </div>
    </>
  )
}

export default DashEvent
