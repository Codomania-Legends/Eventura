import React from 'react'
import { Outlet } from 'react-router'
import DashSideBar from '../Components/DashBoard/DashComponent/DashSideBar'
import DashNav from '../Components/DashBoard/DashComponent/DashNav'

function DashboardComponent() {
  return (
    <>
        <div className="dashbody flex">
            <DashSideBar />
            <section className="content-dash flex">
              <div className="navbar-dash-body">
                <DashNav />
                <Outlet />
              </div>
            </section>
        </div>
    </>
  )
}

export default DashboardComponent
