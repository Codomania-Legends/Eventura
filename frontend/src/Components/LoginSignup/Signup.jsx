import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router"
import "./LoginSignup.css"
import gsap from 'gsap';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [identity, setIdentity] = useState("");
  const [message, setMessage] = useState({"msg" : "" , "type" : ""});

  const navigate = useNavigate()

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

  const handleIdentity = (e, value) => {
    e.preventDefault();
    setIdentity(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !identity) {
      setMessage({msg : "All fields are required" , type : "err"});
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/user/signup", {
        username,
        password,
        identity
      });
      // setMessage(res.data.message || "Signup successful!");
      if(res.data.token){
        localStorage.setItem("token" , res.data.token )
        navigate("/login")
      }
    } catch (err) {
      setMessage({msg : `${err.response?.data?.error || "Signup failed"}` , type : "err"});
    }
  };

  return (
    <>
        <div className="main-sign flex">
          <img src="/login-Blue.png" className='img-login-back' alt="" />
          <img src="/man.png" className='man-image-login' alt="" />
          <img src="/leaf.png" className='leaf-image-login' alt="" />
            <section className="signup-section flex">
              <section className="sub-head-sec flex">
                <h1>Sign up</h1>
              </section>
              <form className="sub-detail-signup flex" onSubmit={handleSubmit}>
                <div className="sign-username flex">
                  <span>Username</span>
                  <input onFocus={ () => setMessage({msg : "" , type : ""}) } type="text" placeholder="Enter Username" className="signusername" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="sign-password flex">
                  <span>Password</span>
                  <input onFocus={ () => setMessage({msg : "" , type : ""}) } type="password" placeholder="Enter Password" className="signpassword" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="forgotPasswordSignup">
                  <div className="forgotPassword">Already a User <i class="fa-solid fa-question questionMark"></i></div>
                  <div className="signup" onClick={() => navigate("/login")}>Login</div>
                </div>
                <div className="identification flex">
                  <button className={`student${identity === "Student" ? " selected" : ""}`} onClick={e => handleIdentity(e, "Student")}>Student</button>
                  <button className={`profesor${identity === "Professor" ? " selected" : ""}`} onClick={e => handleIdentity(e, "Professor")}>Professor</button>
                  <button className={`admin${identity === "Admin" ? " selected" : ""}`} onClick={e => handleIdentity(e, "Admin")}>Admin</button>
                </div>
                <div className="submission flex">
                  <button className="submitting-sign" type="submit">Submit</button>
                </div>
                {message.msg && <div className={`login-message ${message.type=="err"?"error-message":"success-message"}`}>{message.msg}</div>}
              </form>
            </section>
        </div>
    </>
  )
}

export default Signup
