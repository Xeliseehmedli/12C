import "./Benefits.scss";
import Conversation from "../assets/image (6).png";
import iconText from "../assets/icontext.svg";
export default function Benefits() {
  return (
    <>
      <main>
        <section id="benefits">
          <div className="benefits-section">
            <h1>Key Benefits for Members</h1>
            <div>
              <img src={Conversation} alt="conversation-image" />
            </div>
            <div className="icon-text-container">
              <div className="icon-text">
                <div>
                  <img src={iconText} alt="icon" />
                </div>
                <div>
                  <h4>Exclusive Acces</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit
                  </p>
                </div>
              </div>
              <div className="icon-text">
                <div>
                  <img src={iconText} alt="icon" />
                </div>
                <div>
                  <h4>Events</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit
                  </p>
                </div>
              </div>
              <div className="icon-text">
                <div>
                  <img src={iconText} alt="icon" />
                </div>
                <div>
                  <h4>
                    Co-Investment and Sindication <br /> Oppurtunities
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit
                  </p>
                </div>
              </div>
            </div>
            <div className="icon-text-continue">
              <div className="icon-text">
                <div>
                  <img src={iconText} alt="icon" />
                </div>
                <div>
                  <h4>Networking</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit
                  </p>
                </div>
              </div>
              <div className="icon-text">
                <div>
                  <img src={iconText} alt="icon" />
                </div>
                <div>
                  <h4>Mentorship</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
