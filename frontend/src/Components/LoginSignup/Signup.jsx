import React from 'react'
import "./LoginSignup.css"
function Signup() {
  return (
    <>
        <div className="main-sign flex">
            <section className="signup-section flex">
              <section className="sub-head-sec flex">
                <h1>Sign up</h1>
              </section>
              <section className="sub-detail-signup flex">
                <div className="sign-username flex">
                  <span>Username</span>
                  <input type="text" placeholder="Enter Username" className="signusername" />
                </div>
                <div className="sign-password flex">
                  <span>Password</span>
                  <input type="text" placeholder="Enter Password" className="signpassword" />
                </div>
                <div className="identification flex">
                  <button className="student">Student</button>
                  <button className="profesor">Professor</button>
                  <button className="admin">Admin</button>
                </div>
                <div className="submission flex">
                  <button className="submitting-sign">Submit</button>
                </div>
              </section>
            </section>
        </div>
    </>
  )
}

export default Signup