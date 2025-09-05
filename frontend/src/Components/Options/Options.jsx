import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import {useNavigate} from "react-router"
import './Option.css';
import Intersection_Observer from '../../Utils/IntersectionObserver';

gsap.registerPlugin(SplitText);

function Options() {
  const navigate = useNavigate()
  const splitRef = useRef();
  const pageRef = useRef(null)
  const optionsRef = useRef([  ])
  function OptionPageGSAP( ref ){
    const split = SplitText.create( ref.current , { type : "words" } )
    gsap.from(split.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7, 
      ease: "back",
      stagger: 0.15
    });
    [-150 , -50 , 50 , -50 , -150 ].map( ( v , i ) => {
      gsap.to( optionsRef.current[i] , { x : v } )
    } )
  }
  useEffect( () => {
    const observer = Intersection_Observer( "options" , pageRef , splitRef , "" , OptionPageGSAP )
    if( pageRef ){
      observer.observe(pageRef.current)
    }
  } , [] )
  return (
    <>
      <div ref={pageRef} className="third-page-options flex">
        <section className="section1 flex">
          <div ref={splitRef} className="option-text" style={{ maxWidth: "400px" }}>
            "We Handle the<br />
            Chaos, You Enjoy <br />
            the Party!"
          </div>
        </section>
        <section className="section2 flex">
          <div className="btn1 btn flex ">
            <button ref={(el) => optionsRef.current[0] = el} style={{overflow : "hidden"}} onClick={() => navigate("/dashboard/events")} className="button all-events">All Events</button>
          </div>
          <div className="btn2 btn flex ">
            <button ref={(el) => optionsRef.current[1] = el} style={{overflow : "hidden"}} onClick={() => navigate("/dashboard/registration")} className="button your-registration">Your Registration</button>
          </div>
          <div className="btn3 btn flex ">
            <button ref={(el) => optionsRef.current[2] = el} style={{overflow : "hidden"}} onClick={() => navigate("/dashboard/eventform")} className="button host-an-event">Host an Event</button>
          </div>
          <div className="btn4 btn flex ">
            <button ref={(el) => optionsRef.current[3] = el} style={{overflow : "hidden"}} onClick={() => navigate("/dashboard/manage")} className="button manage-event">Manage Event</button>
          </div>
          <div className="btn5 btn flex ">
            <button ref={(el) => optionsRef.current[4] = el} style={{overflow : "hidden"}} onClick={() => navigate("/dashboard/reminder") } className="button reminder">Reminder</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Options;
