import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Blog.css"
import Q_A from './Q&A'

function Blog() {
  return (
    <div className='blog-home'>
      <div className="upperPage-blog">
        <Navbar />
        <div className="heading-blogPage animate_blog" >
          🚀 Introducing <b>Eventura</b> : 
        </div>
        <div className="content-blog-page">
          <Q_A 
            question={"Your One-Stop Event Management Platform"} 
            answer={`In the fast-paced world of college festivals, tech summits, and professional workshops, organizing events efficiently can be a real challenge. From handling registrations to tracking attendance and generating certificates — it's easy to get lost in spreadsheets and chaos. That's exactly where Eventura comes in. Eventura is a modern, powerful, and user-friendly Event Management System designed to simplify every step of managing an event — from start to finish. Built with cutting-edge technologies like React 19, Vite, MongoDB, and animated beautifully with GSAP, Eventura is more than just a tool — it's your event's digital companion.`} />
          <Q_A 
            question={"🎯 Why We Built Eventura"} 
            answer={`We saw a gap — students and organizers struggled with managing event data, verifying attendees, and sharing certificates on time. Most solutions were outdated, slow, or lacked the analytics to understand event reach. So we built Eventura — a system that not only looks modern but performs like a pro.`} />
          <Q_A 
            question={"👥 Who Is Eventura For?"}
            answer={"Whether you're a student organizer, faculty coordinator, or part of a tech community, Eventura is tailor-made for:"}
            list={`Tech Fests & Hackathons
                  ->Seminars & Webinars
                  ->College Events & Competitions
                  ->Training Workshops`
              }
          />
          <Q_A 
            question={"💡 What Makes Eventura Special?"}
            list={`🏷️ Certificate Generator: Automatically create and send certificates to participants
                  ->🛠️ Easy Event Updates: Edit event info, track engagement, and more — all in one place
                  ->📊 Live Dashboard: Track real-time registrations vs impressions
                  ->⏳ Event Countdown: Create excitement and urgency
                  ->🧾 Smart Attendance System: Mark and manage attendees effortlessly`}
          />
          <Q_A 
            question={"🏁 The Result?"}
            answer={`No more manual entries. No more miscommunication. Just smooth, efficient event management with a professional touch. So whether you're planning a coding marathon or a sustainability seminar, Eventura is your backstage hero — keeping everything running seamlessly while you focus on creating an unforgettable experience.`}
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
