import React from 'react'
import "./FooterPage.css"
import facebook from "/facebook.png"
import instagram from "/instagram.png"
import twitter from "/twitter.png"
import linkedinlogo from "/linkedin-logo.png"
import github from "/github.png"
import google from "/google.png"
import send from "/send.png"
function FooterPage() {
  return (
    <>
        <div className="footer-page flex">
            <div className="foot-detail flex">
                <section className="foot-section1 flex">
                  <div className="extra-head">
                    <h1>Lets Collaborate</h1>
                  </div>
                  <div className="extra-info-span">
                    <span>Join the conversation and lets connect with each other Via.</span>
                  </div>

                  <div className="website-icons flex">
                    <div className="facebook icon-ka-baksa">
                      <img src={facebook} className='facebook icon' alt="Facebook" />
                    </div>
                    <div className="instagram icon-ka-baksa">
                      <img src={instagram} className='instagram icon' alt="Instagram" />
                    </div>
                    <div className="twitter icon-ka-baksa" >
                      <img src={twitter} className='twitter icon' alt="Twitter" />
                    </div>
                    <div className="linkedin icon-ka-baksa">
                      <img src={linkedinlogo} className='linkedinlogo icon' alt="LinkedIn" />
                    </div>
                    <div className="github icon-ka-baksa"> 
                      <img src={github} className='github icon' alt="GitHub" />
                    </div>
                    <div className="google icon-ka-baksa"> 
                      <img src={google} className='google icon' alt="Google" />
                    </div>
                  </div>
                </section>
                <section className="foot-section2 flex">
                  <section className="sub-section-right1 flex">
                    <div className="quick-access flex">
                      <h1>Quick Access</h1>
                      <span>Home</span>
                      <span>Events</span>
                      <span>Blogs</span>
                      <span>About us</span>
                      <span>Pricing</span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="contact-us-sec flex">
                      <h1>Contact us</h1>
                      <span>@Eventura.support.in</span>
                      <span>Private</span>
                      <span>Company</span>
                    </div>
                  </section>
                  <section className="sub-section-right2 flex">
                    <div class="query-box">
                      <input type="text" placeholder="Drop Query here....." />
                      <button><i class="fas fa-paper-plane"></i></button>
                    </div>
                  </section>
                </section>
            </div>
            <div className="copyright flex">
              <div className="copyright-sec flex">
                <span>@Copyright Issued by ----</span>
              </div>
              <div className="conditions-sec flex">
                <div className="privacy flex"><span>Privacy Policy</span></div>
                <div className="terms-con flex"><span>Terms and conditions</span></div>
              </div>
            </div>

        </div>
    </>
  )
}

export default FooterPage