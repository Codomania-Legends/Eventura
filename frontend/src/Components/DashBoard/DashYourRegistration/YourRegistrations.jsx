import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashSideBar from '../DashComponent/DashSideBar'
import DashNav from '../DashComponent/DashNav'
import Event from '../DashEvent/Event'
import "./Registrations.css"

function YourRegistrations() {
  const [ events , setEvents ] = useState([])
  useEffect( () => {
    async function handleYourRegistrations() {
        try {
                const res = await axios.get( `http://localhost:5000/event/` , {
                headers : {
                    Authorization : `BEARER ${localStorage.getItem("token")}`
                }
            } )
            if( !res.data ) alert("No Events Registered")
            let e = []
            res.data.map( (event) => {
                event.registrations.some( (v) => v === localStorage.getItem("username") ) ? e.push(event) : null
            } ) 
            console.log(e)
            setEvents(e)
        } catch (error) {
            console.log(error)
        }
    }
    handleYourRegistrations()
  } , [] )
  return (
    <>
        <div className="dashbody flex">
            <section className="sidebar-dash flex">
                <DashSideBar active={2}/>
            </section>
            <section className="content-dash flex">
                <div className="navbar-dash-body">
                    <DashNav />
                </div>
                <div className="eventBody-registrations flex">
                    { events.map( (e) => (
                        <Event event={e} already__={"Hello"} />
                    ) ) }
                </div>
            </section>
        </div>
    </>
  )
}

export default YourRegistrations
