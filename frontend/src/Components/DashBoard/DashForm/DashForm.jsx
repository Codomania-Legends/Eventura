import React from 'react'
import "./LeftDashForm.css"
import DashNav from '../DashComponent/DashNav'
import DashSideBar from '../DashComponent/DashSideBar'
import LeftDashForm from './LeftDashForm';
import RightDashForm from './RightDashForm';
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
                <div className="head-sec flex">
                    <i class="fa-solid fa-arrows-turn-right"></i>
                    <h1>Event Information</h1>
                </div>
                <section className="form-detail-sec flex">
                    <section className="left-info-sec flex">
                        <LeftDashForm/>
                    </section>
                    <div className="center-line"></div>
                    <section className="right-info-sec flex">
                        <RightDashForm/>
                    </section>
                </section>
            </section>
        </div>
    </>
  )
}

export default DashForm