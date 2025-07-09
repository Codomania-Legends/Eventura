import React, { useEffect, useRef } from 'react';
import './FooterPage.css';
import facebook from '/facebook.png';
import instagram from '/instagram.png';
import twitter from '/twitter.png';
import linkedinlogo from '/linkedin-logo.png';
import github from '/github.png';
import google from '/google.png';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

function FooterPage() {
  const splitRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.animateMe');

    // Revert previous SplitText if it exists
    if (splitRef.current) {
      splitRef.current.forEach(split => split.revert());
    }

    // Create SplitText animations for each animateMe element
    const splits = [];
    elements.forEach((el) => {
      const split = new SplitText(el, { type: 'words' });
      splits.push(split);

      gsap.from(split.words, {
        y: -100,
        opacity: 0,
        rotation: gsap.utils.random(-80, 80),
        duration: 0.5,
        ease: 'back',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          toggleActions: 'play none none reset',
        },
      });
    });

    splitRef.current = splits;

    return () => {
      splits.forEach(split => split.revert());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="footer-page flex">
      <div className="foot-detail flex">
        <section className="foot-section1 flex">
          <div className="extra-head animateMe">
            <h1>Let's Collaborate</h1>
          </div>
          <div className="extra-info-span animateMe">
            <span>Join the conversation and let's connect with each other via:</span>
          </div>

          <div className="website-icons flex">
            <div className="facebook icon-ka-baksa">
              <img src={facebook} className="facebook icon animateMe" alt="Facebook" />
            </div>
            <div className="instagram icon-ka-baksa">
              <img src={instagram} className="instagram icon animateMe" alt="Instagram" />
            </div>
            <div className="twitter icon-ka-baksa">
              <img src={twitter} className="twitter icon animateMe" alt="Twitter" />
            </div>
            <div className="linkedin icon-ka-baksa">
              <img src={linkedinlogo} className="linkedinlogo icon animateMe" alt="LinkedIn" />
            </div>
            <div className="github icon-ka-baksa">
              <img src={github} className="github icon animateMe" alt="GitHub" />
            </div>
            <div className="google icon-ka-baksa">
              <img src={google} className="google icon animateMe" alt="Google" />
            </div>
          </div>
        </section>

        <section className="foot-section2 flex">
          <section className="sub-section-right1 flex">
            <div className="quick-access flex animateMe">
              <h1>Quick Access</h1>
              <span>Home</span>
              <span>Events</span>
              <span>Blogs</span>
              <span>About us</span>
              <span>Pricing</span>
            </div>
            <div className="contact-us-sec animateMe flex">
              <h1>Contact us</h1>
              <span>@Eventura.support.in</span>
              <span>Private</span>
              <span>Company</span>
            </div>
          </section>
          <section className="sub-section-right2 flex">
            <div className="query-box animateMe">
              <input type="text" placeholder="Drop Query here..." />
              <button>
                <img src="/send.png" alt="Send" />
              </button>
            </div>
          </section>
        </section>
      </div>

      <div className="copyright flex">
        <div className="copyright-sec flex animateMe">
          <span>© Copyright Issued by ----</span>
        </div>
        <div className="conditions-sec flex">
          <div className="privacy flex animateMe">
            <span>Privacy Policy</span>
          </div>
          <div className="terms-con flex animateMe">
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
