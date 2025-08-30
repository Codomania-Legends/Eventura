import React, { useEffect, useRef } from 'react'
import './Pastevent.css'
import event1 from "/eve.jpg"
import event2 from "/eveista.jpg"
import work1 from "/workshop1.jpg"
import work2 from "/workshop2.jpg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Intersection_Observer from '../../Utils/IntersectionObserver'

gsap.registerPlugin(ScrollTrigger);

function Pastevent() {
  
  // PasEvent Animations
  const pastEventRef = useRef(null)
  const box1Ref = useRef(null)
  const box2Ref = useRef(null)
  const box3Ref = useRef(null)
  useEffect(() => {
    const observer = Intersection_Observer( "pastevents" , box1Ref , box2Ref , box3Ref )
    if (pastEventRef.current) {
      observer.observe(pastEventRef.current);
    }

    return () => {
      observer.disconnect(); 
      gsap.killTweensOf([box1Ref.current, box2Ref.current, box3Ref.current]); 
    };
  }, []);

  // PasEvent Animations 

  return (
    <>
        <main ref={pastEventRef} id='pastpage' className="past-main flex">
            <div ref={box1Ref} className="div-box1 flex" >
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
            <div ref={box2Ref} className="div-box2 flex" >
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
            <div ref={box3Ref} className="div-box3 flex">
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
