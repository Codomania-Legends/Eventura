import React from 'react'
import './Pastevent.css'
import event1 from "/eve.jpg"
import event2 from "/eveista.jpg"
import work1 from "/workshop1.jpg"
import work2 from "/workshop2.jpg"
function Pastevent() {
  return (
    <>
        <main id='pastpage' className="past-main flex">
            <div className="div-box1 flex">
            <div className="images flex">
                <div className="work-img-1">
                    <img src={work1} alt="" className='work1-img' />
                  </div>
                  <div className="work-img-2">
                    <img src={work2} alt="" className='work2-img' />
                  </div>
                </div>
                <div className="work-info flex">
                  <div className="work-heading flex">
                    <h2>Workshop</h2>
                </div>
                <div className="work-info-detail flex">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam nemo ab in, dolore perferendis adipisci impedit hic voluptatum minima voluptates non? Earum commodi aspernatur doloribus veritatis consectetur, explicabo dicta?</span>
                </div>
              </div>
            </div>
            <div className="div-box2 flex">
              <div className="images flex">
                <div className="work-img-1">
                    <img src={work1} alt="" className='work1-img' />
                  </div>
                  <div className="work-img-2">
                    <img src={work2} alt="" className='work2-img' />
                  </div>
                </div>
                <div className="work-info flex">
                  <div className="work-heading flex">
                    <h2>Workshop</h2>
                </div>
                <div className="work-info-detail flex">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam nemo ab in, dolore perferendis adipisci impedit hic voluptatum minima voluptates non? Earum commodi aspernatur doloribus veritatis consectetur, explicabo dicta?</span>
                </div>
              </div>
            </div>
            <div className="div-box3 flex">
            <div className="images flex">
                <div className="event-img-1">
                  <img src={event1} alt="" className='event1-img' />
                </div>
                <div className="event-img-2">
                  <img src={event2} alt="" className='event2-img' />
                </div>
              </div>
              <div className="event-info flex">
                <div className="event-heading flex">
                  <h2>Eveista</h2>
                </div>
                <div className="event-info-detail flex">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam nemo ab in, dolore perferendis adipisci impedit hic voluptatum minima voluptates non? Earum commodi aspernatur doloribus veritatis consectetur, explicabo dicta?</span>
                </div>
              </div>
            </div>
        </main>
    </>
  )
}

export default Pastevent