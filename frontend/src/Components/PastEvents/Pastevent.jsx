import React, { useEffect, useRef } from 'react'
import './Pastevent.css'
import event1 from "/eve.jpg"
import event2 from "/eveista.jpg"
import work1 from "/workshop1.jpg"
import work2 from "/workshop2.jpg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Pastevent() {
  const box1Ref = useRef();
  const box2Ref = useRef();

  useEffect(() => {
    gsap.set([box1Ref.current, box2Ref.current], { clearProps: 'all' });

    const animateBox1 = () => {
      gsap.fromTo(box1Ref.current,
        { x: 0, y: 0, rotate: 0 },
        {
          x: '-15em',
          y: '4em',
          rotate: -10,
          duration: 0.2,
          ease: 'linear',
        }
      );
    };
    const animateBox2 = () => {
      gsap.fromTo(box2Ref.current,
        { x: 0, y: 0, rotate: 0 },
        {
          x: '15em',
          y: '4em',
          rotate: 10,
          duration: 0.2,
          ease: 'linear',
        }
      );
    };

    ScrollTrigger.create({
      trigger: box1Ref.current,
      start: '50% 80%',
      toggleActions: 'none none none none',
      onEnter: animateBox1,
      onEnterBack: animateBox1,
      onLeave: () => gsap.set(box1Ref.current, { x: 0, y: 0, rotate: 0 }),
      onLeaveBack: () => gsap.set(box1Ref.current, { x: 0, y: 0, rotate: 0 }),
    });
    ScrollTrigger.create({
      trigger: box2Ref.current,
      start: '50% 80%',
      toggleActions: 'none none none none',
      onEnter: animateBox2,
      onEnterBack: animateBox2,
      onLeave: () => gsap.set(box2Ref.current, { x: 0, y: 0, rotate: 0 }),
      onLeaveBack: () => gsap.set(box2Ref.current, { x: 0, y: 0, rotate: 0 }),
    });
    const handleHover = (selector, target) => {
      const el = document.querySelector(selector);
      if (!el) return;
      el.addEventListener("mouseover", () => {
      gsap.to(target, { scale: 1.1, zIndex: 2, duration: 0.05 , ease:"power2.inOut" });
      });
      el.addEventListener("mouseout", () => {
      gsap.to(target, { scale: 1, zIndex: 0, duration: 0.05 , ease:"power2.inOut" });
      });
    };

    handleHover(".div-box1", box1Ref.current);
    handleHover(".div-box2", box2Ref.current);
    handleHover(".div-box3", document.querySelector(".div-box3"));
  }, []);

  return (
    <>
        <main id='pastpage' className="past-main flex">
            <div className="div-box1 flex" ref={box1Ref}>
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
            <div className="div-box2 flex" ref={box2Ref}>
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
