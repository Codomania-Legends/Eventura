import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Option.css';

gsap.registerPlugin(SplitText, ScrollTrigger);

function Options() {
  const splitRef = useRef();
  const timelineRef = useRef();

  useEffect(() => {
    let split;
    const animate = () => {
      if (splitRef.current) splitRef.current.revert();
      split = new SplitText('.option-text', { type: 'lines,words' });
      splitRef.current = split;
      gsap.set(split.lines, { clearProps: 'all' });
      gsap.from(split.lines, {
        rotationX: -100,
        transformOrigin: '50% 50% -160px',
        opacity: 0,
        duration: 0.8,
        ease: 'power3',
        stagger: 0.25,
      });
      if (timelineRef.current) timelineRef.current.kill();
      // Reset button positions before animating
      gsap.set([
        '.btn1',
        '.btn2',
        '.btn3',
        '.btn4',
        '.btn5',
        '.button',
      ], { x: 0 });
      const tl = gsap.timeline();
      tl.to('.button', {
        x: -250,
        duration: 0.5,
        ease: 'power3.inOut',
      });
      tl.to([
        '.btn1',
        '.btn2',
        '.btn3',
        '.btn4',
        '.btn5',
      ], {
        x: (i) => {
          const values = [150, 250, 350, 250, 150];
          return values[i];
        },
        duration: 0.6,
        ease: 'bounce.out',
        stagger: 0.1,
      });
      timelineRef.current = tl;
    };

    const trigger = ScrollTrigger.create({
      trigger: '.third-page-options',
      start: '50% 80%',
      toggleActions: 'play none none reset',
      onEnter: animate,
      onEnterBack: animate,
      onLeave: () => {
        if (splitRef.current) splitRef.current.revert();
        if (timelineRef.current) timelineRef.current.kill();
      },
      onLeaveBack: () => {
        if (splitRef.current) splitRef.current.revert();
        if (timelineRef.current) timelineRef.current.kill();
      },
    });

    return () => {
      trigger.kill();
      if (splitRef.current) splitRef.current.revert();
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  return (
    <>
      <div className="third-page-options flex">
        <section className="section1 flex">
          <div className="option-text" style={{ maxWidth: "400px" }}>
            "We Handle the<br />
            Chaos, You Enjoy <br />
            the Party!"
          </div>
        </section>
        <section className="section2 flex">
          <div className="btn1 btn flex ">
            <button className="button all-events">All Events</button>
          </div>
          <div className="btn2 btn flex ">
            <button className="button your-registration">Your Registration</button>
          </div>
          <div className="btn3 btn flex ">
            <button className="button host-an-event">Host an Event</button>
          </div>
          <div className="btn4 btn flex ">
            <button className="button manage-event">Manage Event</button>
          </div>
          <div className="btn5 btn flex ">
            <button className="button reminder">Reminder</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Options;
