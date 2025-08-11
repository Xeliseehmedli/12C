import "./OurTeam.scss";
import Tal from "../assets/TalCatran.png";
import Bekali from "../assets/BekaliMurselov.png";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import frame from "../assets/abstract-gradient.png";
import global from "../assets/global.png";
import C from "../assets/Logos.svg";
import msg from "../assets/Icon.svg";
import call from "../assets/Icon (1).svg";
import location from "../assets/Icon (2).svg";
import copyright from "../assets/copyright.svg";
export default function OurTeam() {
  return (
    <>
      <main>
        <section id="ourteam">
          <div className="ourteam-section">
            <h1>Our Team</h1>
            <div className="ourteam-list">
              <div className="ourteam-content">
                <div className="ourteam-text">
                  <p>Tal Catran</p>
                  <span>CEO</span>
                  <p>
                    Tal Catran brings exceptional <br />
                    expertise in fundraising and <br />
                    startup investments, with a <br />
                    proven track record of <br />
                    successfully accelerating <br />
                    startups and preparing them <br />
                    for investment readiness.
                  </p>
                  <div className="member-social">
                    <img src={linkedin} alt="linkedin-icon" />
                    <img src={twitter} alt="twitter-icon" />
                    <img src={facebook} alt="facebook-icon" />
                  </div>
                </div>
                <div>
                  <img src={Tal} alt="TalCatran" />
                </div>
              </div>

              <div className="ourteam-content bekali">
                <div className="ourteam-text">
                  <p>Bekali Mursalov</p>
                  <span>CRO</span>
                  <p>
                    Bekali Mursalov is a highly <br />
                    experienced business leader <br />
                    with over 24 years of expertise <br />
                    across banking, textiles, <br /> agriculture, and
                    construction...
                  </p>
                  <div className="member-social">
                    <img src={linkedin} alt="linkedin-icon" />
                    <img src={twitter} alt="twitter-icon" />
                    <img src={facebook} alt="facebook-icon" />
                  </div>
                </div>
                <div>
                  <img src={Bekali} alt="TalCatran" />
                </div>
              </div>
            </div>
          </div>

          <div className="image-with-text">
            <div className="image-stack">
              <img src={frame} alt="frame" />
              <img src={global} alt="global" />
            </div>
            <div className="vision-section">
              <div className="vision-header">
                <p>
                  Our <span>Vision</span> for
                </p>
                <p>2025</p>
              </div>
              <div className="vision-description">
                <p>
                  By 2026, I2C envisions itself as a <br />
                  leading investor network within <br />
                  Azerbaijan’s creative sector, <br />
                  supporting 20+ startups each year <br />
                  and growing its membership by <br />
                  20% annually
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-section">
          <div className="logo">
            <img src={C} alt="12C" />
          </div>
          <div className="contact-info">
            <div>
              <img src={msg} alt="contact" />
              <span>info@i2c.com</span>
            </div>
            <div>
              <img src={call} alt="call" />
              <span>+994 012 222 22 22</span>
            </div>
            <div>
              <img src={location} alt="location" />
              <span>Mehdi Mehdizade 29</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            <img src={copyright} alt="copyright-icon" />{" "}
            <span>2024 I2C. All right reserved</span>
          </div>
          <div className="footer-icons">
            <img src={linkedin} alt="linkedin-icon" />
            <img src={twitter} alt="twitter-icon" />
            <img src={facebook} alt="facebook-icon" />
          </div>
        </div>
      </footer>
    </>
  );
}
