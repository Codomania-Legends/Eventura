import React from 'react'
import DashNav from '../DashComponent/DashNav'
import "./EventDash.css"
import DashSideBar from '../DashComponent/DashSideBar'
import Event from './Event'
import FilterOption from './FilterOption'
import BottomFilter from './BottomFilter'

function DashEvent() {
    const statisData = [ 1 , 1 , 1 , 1 , 1 , 1 ]
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
                        {statisData.map( (_) => (<Event />) )}
                    </div>
                    <div className="otherFilterOptions flex">
                        <div className="optionsFilter flex">
                            <FilterOption img={"/online-video.png"} text={"Webinar"} />
                            <FilterOption img={"/seminar.png"} text={"Workshop"} />
                            <FilterOption img={"/competition.png"} text={"Contests"} />
                            <FilterOption img={"/hackathon.png"} text={"Hackathon"} />
                            <FilterOption img={"/calendar.png"} text={"Casual Events"} />
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
