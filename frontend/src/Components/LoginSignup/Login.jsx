import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router"

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Both fields are required");
      return;
    }
    try {
      const token = "BEARER ".concat(localStorage.getItem("token"));
      const res = await axios.post(
        "http://localhost:5000/user/login",

        { username, password },
        {
          headers: {
            Authorization: token
          }
        }
      );
      setMessage(res.data.message || "Login successful!");
      localStorage.setItem("username" , username)
      if( res.data.user ) navigate("/dashboard/events")
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <>
        <div className="main-login flex">
          <img src="/login-Blue.png" className='img-login-back' alt="" />
          <img src="/man.png" className='man-image-login' alt="" />
          <img src="/leaf.png" className='leaf-image-login' alt="" />
            <section className="login-section flex">
              <section className="sub-head-sec flex">
                <h1>Login</h1>
              </section>
              <form className="sub-detail-signup flex" onSubmit={handleSubmit}>
                <div className="login-username flex">
                  <span>Username</span>
                  <input type="text" placeholder="Enter Username" className="loginusername" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="login-password flex">
                  <span>Password</span>
                  <input type="password" placeholder="Enter Password" className="loginpassword" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="submission flex">
                  <button className="submitting-login" type="submit">Submit</button>
                </div>
                {message && <div className="login-message">{message}</div>}
              </form>
            </section>
        </div>
    </>
  )
}

export default Login
