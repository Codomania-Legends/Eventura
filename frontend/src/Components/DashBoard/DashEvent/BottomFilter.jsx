import React from 'react'
import "./EventDash.css"

function BottomFilter() {
  return (
    <div className="bottomFilterNav flex">
        <span>All</span>
        <span>New</span>
        <span>Upcomming</span>
        <div>
            <span className='bottom-nav-divss'>Status</span>
            <i className='fa-solid fa-chevron-up icon-small'></i>
        </div>
        <div>
            <span className='bottom-nav-divss'>Domain</span>
            <i className='fa-solid fa-chevron-up icon-small'></i>
        </div>
        <div>
            <span className='bottom-nav-divss'>Type</span>
            <i className='fa-solid fa-chevron-up icon-small'></i>
        </div>
    </div>
  )
}

export default BottomFilter
