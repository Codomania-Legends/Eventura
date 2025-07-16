import React, { useEffect } from 'react'
import "./EventDash.css"
import gsap from "gsap"

function FilterOption({img , text , allEvents , setAll , setEvents , events}) {
  useEffect( () => {
    gsap.fromTo( ".option-option" ,
      { y : -10 , stagger : 0.1 , opacity : 0 },
      { y : 0 , stagger : 0.1 , opacity : 1 }
    )
  } , [] )
  return (
    <div onClick={() => {
      if( events == allEvents ){
        const newEvents = events.filter((v) => v.eventType === text);
        setEvents(newEvents);
      }
      else{
        setEvents(allEvents)
      }
    }} className="option-option flex">
        <img className='image-option-filter' src={img} />
        <span className='textt-option-filter'>{text}</span>
    </div>
  )
}

export default FilterOption
