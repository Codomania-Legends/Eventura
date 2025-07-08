import React from 'react'
import "./EventDash.css"

function FilterOption({img , text}) {
  return (
    <div className="option-option flex">
        <img className='image-option-filter' src={img} />
        <span className='textt-option-filter'>{text}</span>
    </div>
  )
}

export default FilterOption
