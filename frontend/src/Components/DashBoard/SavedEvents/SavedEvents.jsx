import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import SavedContent from './SavedContent';

function SavedEvents({ class__, visible }) {
 const savedRef = useRef();

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        savedRef.current,
        { y: -200, opacity: 0, display: 'block' },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'bounce.out',
          display: 'block',
        }
      );
    } else {
      gsap.set(savedRef.current, { opacity: 0, display: 'none' });
    }
  }, [visible]);

  return (
    <div ref={savedRef} className={`savedDiv ${class__} flex`} style={{ display: visible ? 'block' : 'none' }}>
      <SavedContent/>
    </div>
  )
}

export default SavedEvents
