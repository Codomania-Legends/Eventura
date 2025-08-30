import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

function Home() {
  
  // Home text Animation
  useEffect( () => {
    gsap.set( ".quote-text" , { opacity : 0 } ) 
    gsap.set( ".know-more-btn" , { opacity : 0 , y : 40 } ) 

    let gsap1 = gsap.from( ".animate-text-home-above" , {
      opacity : 0,
      x : -40,
      ease : "power2.inOut",
      stagger : 0.05,
      onComplete : gsap.to( ".quote-text" , {opacity : 1 , delay : 0.2 , 
        onComplete : gsap.to( ".know-more-btn" , { opacity : 1 , y : 0 } )
      } )
    } )
    return () => {
      gsap1.kill()
    }
  } , [] )
  // Home text Animation

  return (
    <>
        <main className="main-home flex">
            <Navbar/>
            <div className="home-content">
              <div className="main-head-text flex">
                <div className="first bigtext flex">
                  <span className='text animate-text-home-above' >F</span><p className='animate-text-home-above'>lawless Events</p>
                </div>
                <div className="second bigtext flex">
                  <span className='text animate-text-home-above'>S</span><p className='animate-text-home-above'>tress-Free Planning.</p>

                </div>
              </div>
              <div className="home-quote-text flex">
                <div className="quote-text flex">
                  <span className='quote'>"We craft memorable events with perfection and passion. </span>
                  <p>Let us turn your special moments into unforgettable experiences!"</p>
                </div>
              </div>
              <div className="know-more flex">
                <button onClick={() => {
                    document.querySelector("#pastpage").scrollIntoView({behavior : "smooth"})
                  } } className="know-more-btn flex">
                  <span>Know More </span>
                  <i className='fa-solid fa-chevron-down rotateMe'></i>
                </button>
              </div>
            </div>
        </main>
    </>
  )
}

export default Home
