import React from 'react'
import Navbar from '../Navebar/Navbar'
import './Home.css'
function Home() {
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
                <button className="know-more-btn">
                  Know More <i className='fa-solid fa-chevron-down'></i>
                </button>
              </div>
            </div>
        </main>
    </>
  )
}

export default Home