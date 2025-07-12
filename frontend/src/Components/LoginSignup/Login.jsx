import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router"
import gsap from "gsap"

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({"msg" : "" , "type" : ""});

  useEffect( () => {
    const timeLine = gsap.timeline()
    timeLine.from( ".img-login-back" , {
      opacity : 0,
      x : 100,
      duration : 1
    } )
    timeLine.from( ".man-image-login" , {
      opacity : 0,
      x : -10,
      duration : 0.5
    } )
    timeLine.from( ".leaf-image-login" , {
      opacity : 0,
      duration : 0.5
    } )
  } , [] )

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage({msg : "Both fields are required" , type : "err"});
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
      setMessage({msg : "Login successful!" , type : "success"});
      localStorage.setItem("username" , username)
      if( res.data.user ) navigate("/")
    } catch (err) {
      setMessage({msg : `${err.response?.data?.error || "Login failed"}` , type : "err"});
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
                  <input type="text" 
                    placeholder="Enter Username" 
                    className="loginusername" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    onFocus={ () => setMessage({msg : "" , type : ""}) }
                  />
                </div>
                <div className="login-password flex">
                  <span>Password</span>
                  <input 
                    type="password" 
                    onFocus={ () => setMessage("") } 
                    placeholder="Enter Password" 
                    className="loginpassword" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                  />
                </div>
                <div className="forgotPasswordSignup">
                  <div className="forgotPassword">Forgot Password <i class="fa-solid fa-question questionMark"></i></div>
                  <div className="signup" onClick={() => navigate("/signup")}>Signup</div>
                </div>
                <div className="submission flex">
                  <button className="submitting-login" type="submit">Submit</button>
                </div>
                {message.msg && <div className={`login-message ${message.type=="err"?"error-message":"success-message"}`}>{message.msg}</div>}
              </form>
            </section>
        </div>
    </>
  )
}

export default Login
