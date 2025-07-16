import React from 'react'
import "./Liked.css"
import backarrow from "/backarrow.png"
import {Data} from "../../Data/Data"
function Liked({class__, visible}) {
  return (
    <>
    {
        visible &&
        <div className='liked-ka-dabba flex'>
            <section className="heading-section flex">
                <img src={backarrow} className='liked-back-arrow' />
                <pre className='liked-text'> Liked</pre>
                <pre className='event-text'> Event</pre>
            </section>
            <section className="liked-content-section flex">
                {
                    Data.map(( v, i ) => (
                        <div className='liked-detail-content flex'>
                            <section className="liked-img-sec flex">
                                <img src={v.image} className="liked-image-dabba flex"/>
                                <div className="liked-image-event-name flex"></div>
                            </section>
                            <section className="liked-info-section flex">

                            </section>
                        </div>
                    ))
                }

            </section>
        </div>
    }
    
    </>
  )
}

export default Liked