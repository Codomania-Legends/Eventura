import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
// import { gsap } from 'gsap';
// import { SplitText } from 'gsap/SplitText';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(SplitText, ScrollTrigger);

function Home() {
  const splitRef = useRef();

  useEffect(() => {
    let split;
    const animate = () => {
      if (splitRef.current) splitRef.current.revert();
      split = new SplitText('.text', { type: 'lines,words' });
      splitRef.current = split;
    // gsap.set(split.lines, { clearProps: 'all' });
    // gsap.from(split.lines, {
      //   rotationX: -100,
      //   transformOrigin: '50% 50% -160px',
      //   opacity: 0,
      //   duration: 0.8,
      //   ease: 'power3',
      //   stagger: 0.25,
      // });
    };

    // const trigger = ScrollTrigger.create({
    //   trigger: '.main-home',
    //   start: '50% 80%',
    //   toggleActions: 'play none none reset',
    //   onEnter: animate,
    //   onEnterBack: animate,
    //   onLeave: () => {
    //     if (splitRef.current) splitRef.current.revert();
    //   },
    //   onLeaveBack: () => {
    //     if (splitRef.current) splitRef.current.revert();
    //   },
    // });

    // return () => {
    //   trigger.kill();
    //   if (splitRef.current) splitRef.current.revert();
    // };
  }, []);

  return (
    <>
        <main className="main-home flex">
            <Navbar/>
            <div className="home-content">
              <div className="main-head-text flex">
                <div className="first bigtext flex">
                  <span className='text'>F</span><p>lawless Events</p>
                </div>
                <div className="second bigtext flex">
                  <span className='text'>S</span><p>tress-Free Planning.</p>

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
