import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import LikedContent from './LikedContent';

function LikedEvents({ class__, visible }) {
  const likedRef = useRef();

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        likedRef.current,
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
      gsap.set(likedRef.current, { opacity: 0, display: 'none' });
    }
  }, [visible]);

  return (
    <div ref={likedRef} className={`likedDiv ${class__} flex`} style={{ display: visible ? 'block' : 'none' }}>
      <LikedContent/>
    </div>
  )
}

export default LikedEvents