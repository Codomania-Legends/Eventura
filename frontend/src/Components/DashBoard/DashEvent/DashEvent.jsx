import React, { useEffect, useState } from 'react'
import DashNav from '../DashComponent/DashNav'
import "./EventDash.css"
import DashSideBar from '../DashComponent/DashSideBar'
import Event from './Event'
import FilterOption from './FilterOption'
import BottomFilter from './BottomFilter'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { getAuthHeaders } from '../../../Utils/auth'

function DashEvent() {
    const navigate = useNavigate()
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
        // async function handleGetAllEvents() {
        //     if (!localStorage.getItem("token")) {
        //         navigate("/login");
        //         return;
        //     }

        //     const username = localStorage.getItem("username");
        //     const url = "http://localhost:5000/event";
        //     const cache = await caches.open("eventura-cache-v1");

        //     const cachedResponse = await cache.match(url);

        //     if (cachedResponse) {
        //         const data = await cachedResponse.json();
        //         console.log("📦 Loaded events from cache");

        //         setEvents(data);
        //         setAll(data);
        //         handleSetRegistsredEvents(data, username);
        //     } else {
        //         const res = await axios.get(url, {
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
        //             },
        //         });
        //         console.log(res)
        //         const data = await res.clone().json(); // Use clone for caching
        //         console.log("🌐 Loaded events from server");

        //         setEvents(data);
        //         setAll(data);
        //         handleSetRegistsredEvents(data, username);

        //         cache.put(url, res); // Save response to cache
        //     }
        // }

        // handleGetAllEvents();
    }, []);

    // useEffect(() => {
    //     if ( events.length === 0 ) return;

    //     async function handleCacheImages() {
    //         const cache = await caches.open("eventura-cache-v1")
    //         for (let event of events) {
    //             const url = new URL(event.image, window.location.origin).href
    //             const match = await cache.match(url)
    //             if (!match) {
    //                 try {
    //                     await cache.add(url)
    //                     console.log("Cached:", url)
    //                 } catch (err) {
    //                     console.error("Failed to cache:", url, err)
    //                 }
    //             }
    //         }
    //         setImageLoaded(true)    
    //     }
    //     handleCacheImages()
    //     caches.open("eventura-cache-v1").then((cach) => {
    //         console.log("cache : " ,cach)
    //     })
    // }, [events]);

    useEffect( () => {
        if (moveToLast.eventName) {
            const newE = events.filter((e) => e.eventName !== moveToLast.eventName);
            setEvents([...newE, moveToLast])
            console.log([...newE , moveToLast])
        }
    } , [moveToLast] )

    return (
        <>
            {/* <div className="dashbody flex"> */}
                <div className="AlleventsAndFilter flex">
                    <div className="allEventsContentBody flex">
                        {(imageLoaded && events.length > 0) ? (
                            events.map((each) => (
                                <Event setMoveToLast={setMoveToLast} key={each._id} event={each} registeredEevents={registeredEevents} />
                            ))
                        ) : (
                            <div className="loader-container">LOADING EVENTS...</div>
                        )}
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
            {/* </div> */}
        </>
    )
}

export default DashEvent
