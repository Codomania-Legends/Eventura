import React, { useEffect, useState } from 'react'
import DashNav from '../DashComponent/DashNav'
import "./EventDash.css"
import DashSideBar from '../DashComponent/DashSideBar'
import Event from './Event'
import FilterOption from './FilterOption'
import BottomFilter from './BottomFilter'
import axios from 'axios'
import {gsap} from "gsap"
import { Navigate } from 'react-router'
import { PuffLoader } from "react-spinners"

function DashEvent() {
    const [events, setEvents] = useState([])
    const [allEvents, setAll] = useState([])
    const [imageLoaded, setImageLoaded] = useState(false)
    const [registeredEevents , setRegisteredEevents] = useState([])
    const [moveToLast , setMoveToLast] = useState({})

    useEffect(() => {
        function handleSetRegistsredEvents( events , username ){
            let e = []
            events.map( (event) => {
                event.registrations.some( (v) => v === username ) ? e.push(event.eventName) : null
            } )
            setRegisteredEevents(e)
        }
        async function handleGetAllEvents() {
            if (!localStorage.getItem("token")) return Navigate("/login");

            const token = "BEARER ".concat(localStorage.getItem("token"));
            const res = await axios.get("http://localhost:5000/event", {
                headers: {
                    Authorization: token,
                },
            });

            if (!res.data) throw new Error("Internal Server Error");
            handleSetRegistsredEvents( res.data , localStorage.getItem("username") )
            setEvents(res.data);
            setAll(res.data);
        }

        handleGetAllEvents();
    }, []);

    useEffect(() => {
        if (events.length !== 0) {
            async function preLoadAllImages() {
                const imgUrls = events.map((e) => `/${e.image}`); // ensure correct path
                const promises = imgUrls.map((url) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = url;
                        img.onload = resolve;
                        img.onerror = resolve;
                    });
                });

                await Promise.all(promises);
                setImageLoaded(true);
            }

            preLoadAllImages();
        }
    }, [events]);

    useEffect( () => {
        if (moveToLast.eventName) {
            const newE = events.filter((e) => e.eventName !== moveToLast.eventName);
            setEvents([...newE, moveToLast])
            console.log([...newE , moveToLast])
        }
    } , [moveToLast] )

    return (
        <>
            {(imageLoaded && events.length > 0) ? (
                <div className="dashbody flex">
                    <section className="sidebar-dash flex">
                        <DashSideBar active={1} />
                    </section>
                    <section className="content-dash flex">
                        <div className="navbar-dash-body">
                            <DashNav />
                        </div>
                        <div className="AlleventsAndFilter flex">
                            <div className="allEventsContentBody flex">
                                {events.map((each) => (
                                    <Event setMoveToLast={setMoveToLast} key={each._id} event={each} registeredEevents={registeredEevents} />
                                ))}
                            </div>
                            <div className="otherFilterOptions flex">
                                <div className="optionsFilter flex">
                                    <FilterOption img={"/online-video.png"} text={"Webinar"} setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} />
                                    <FilterOption img={"/seminar.png"} text={"Workshop"} setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} />
                                    <FilterOption img={"/competition.png"} text={"Contests"} setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} />
                                    <FilterOption img={"/hackathon.png"} text={"Hackathon"} setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} />
                                    <FilterOption img={"/calendar.png"} text={"Casual Events"} setAll={setAll} allEvents={allEvents} setEvents={setEvents} events={events} />
                                </div>
                            </div>
                            <BottomFilter />
                        </div>
                    </section>
                </div>
            ) : (
                <div className="loader-container"><PuffLoader /></div>
            )}
        </>
    )
}

export default DashEvent
