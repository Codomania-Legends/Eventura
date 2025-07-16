import React from 'react'

function LikedEvents({v}) {
    console.log(v)
  return (
    <div className='liked-detail-content flex'>
        <section className="liked-img-sec flex">
            <img src={`/${v.image}`} className="liked-image-dabba flex"/>
            <div className="liked-image-event-name flex">
                <div className="li-event-name flex">
                    <span className="liked-event-name">{v.eventName}</span>
                </div>
                <div className="li-event-type flex">
                    <span className="liked-event-type"> {v.eventType} </span>
                </div>
            </div>
        </section>
        <section className="liked-info-section flex">
            <div className="liked-registered-and-cancel flex">
                <div className="registered-button flex">
                    <button className="regis-btn">Register</button>
                </div>
                <div className="days-left flex">14</div>
                <div className="cancel-icon flex"><i class="fa-solid fa-xmark" style={{color: "#001329;"}}></i></div>
            </div>
            <div className="people-register flex">
                <div className="total-people-regis flex">{v.total_r}</div>
                <div className="bell-icon flex"><i class="fa-regular fa-bell" style={{color: "#001329;"}}></i></div>
            </div>
            <div className="host-name-liked flex">
                <div className="host-name-like flex">{v.hostName}</div>
                <div className="Liked-hrs-ago flex">4hr ago</div>
            </div>
        </section>
    </div>
  )
}

export default LikedEvents
