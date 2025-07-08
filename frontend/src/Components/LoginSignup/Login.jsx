import React from 'react'

function Login() {
  return (
    <>
        <div className="main-login flex">
            <section className="login-section flex">
              <section className="sub-head-sec flex">
                <h1>Login</h1>
              </section>
              <section className="sub-detail-login flex">
                <div className="login-username flex">
                  <span>Username</span>
                  <input type="text" placeholder="Enter Username" className="loginusername" />
                </div>
                <div className="login-password flex">
                  <span>Password</span>
                  <input type="text" placeholder="Enter Password" className="loginpassword" />
                </div>
                <div className="submission flex">
                  <button className="submitting-login">Submit</button>
                </div>
              </section>
            </section>
        </div>
    </>
  )
}

export default Login