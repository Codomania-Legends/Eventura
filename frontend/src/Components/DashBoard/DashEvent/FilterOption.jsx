import React from 'react'
import "./EventDash.css"

function FilterOption({img , text , allEvents , setAll , setEvents , events}) {
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
