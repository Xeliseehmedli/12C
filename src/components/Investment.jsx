import "./Investment.scss";
import Animation from "../assets/animation.png";
import Creative from "../assets/creative.png";
import Music from "../assets/music.png";
import Cinema from "../assets/cinema.png";
import Video from "../assets/video.png";
export default function Investment() {
  return (
    <>
      <main>
        <section id="investment">
          <div className="investment-section">
            <div className="investment-header">
              <h1 className="investment-title">Key investment models</h1>
              <p className="investment-subtitle">Royalties Investments</p>
              <span className="investment-description">
                The I2C Investor’s Club strategically focuses on 3 primary
                investment models to maximize <br />
                cultural impact and ROI:
              </span>
            </div>
            <div className="investment-cards">
              <div className="card-music" style={{ marginTop: "-7vw" }}>
                <img src={Music} alt="music-image" />
                <h2>Music</h2>
                <p>
                  Lorem Ipsum is simply dummy text <br /> of the printing and
                  typesetting <br /> industry.
                </p>
              </div>
              <div className="card-animation">
                <img src={Animation} alt="animation-image" />
                <h2>Animation</h2>
                <p>
                  Lorem Ipsum is simply dummy text <br /> of the printing and
                  typesetting <br /> industry.
                </p>
              </div>
              <div className="card-cinema" style={{ marginTop: "-7vw" }}>
                <img src={Cinema} alt="cinema-image" />
                <h2>Cinema</h2>
                <p>
                  Lorem Ipsum is simply dummy text <br /> of the printing and
                  typesetting <br /> industry.
                </p>
              </div>
              <div className="card-creative">
                <img src={Creative} alt="creative-image" />
                <h2>Yaradıcı Market Platform</h2>
                <p>
                  Lorem Ipsum is simply dummy text <br /> of the printing and
                  typesetting <br /> industry.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="equity-section">
            <div className="equity-card">
              <h1>Equity Investments</h1>
              <p>Cultech & Gaming</p>

              <div>
                <img src={Video} alt="video-image" className="equity-image" />
              </div>

              <p>
                Investments in startups blending culture and technology,
                including VR, AR, AI, and gaming
              </p>
            </div>
          </div>
          <div className="sponsorship-section">
          <h1>Sponsorship INVESTMENTS</h1>
            <div className="sponsorship-content">

                <div className="sponsorship-item">
                    <p>01</p>
                    <p> Events & <br />Conferences</p>
                    <p>All you have to do is fill out our online <br />
                     application form and submit it along with <br /> the required documents and materials.</p>
                </div>
                <div className="sponsorship-item">
                    <p>02</p>
                    <p> Programs & <br />Grants</p>
                    <p>Our team of experienced industry <br /> professionals will review your application <br />
                     and work.</p>
                </div>
                <div className="sponsorship-item">
                    <p>03</p>
                    <p style={{position:"relative",top:"1vw"}}> Infrastructure</p>
                    <p style={{position:"relative",top:"1.7vw"}}>Once your application is approved, we'll <br/> provide you with the funding you need to <br /> bring your film project to life.</p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
