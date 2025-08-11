import "./OurFocus.scss";
import Text from "../assets/Image (3).png";
import Building from "../assets/Image (4).png";
import Exchange from "../assets/Image (5).png";

export default function OurFocus() {
  return (
    <>
      <main>
        <section  id="ourfocus" className="focus-section">
          <div className="focus-container">
            <h1>OUR FOCUS</h1>

            <div className="focus-items">
              <div className=" collaborative-investment">
                <img src={Text} alt="Collaborative investment icon" />
                <h2>
                  Collaborative Investment <br />
                  Text
                </h2>
                <p>
                  By enabling co-investment (syndicated <br />
                  investment), the club reduces individual risk <br />
                  while promoting collaboration within the investor <br />
                  community. This model enhances.
                </p>
              </div>

              <div className=" collaborative-investment">
                <img src={Building} alt="Mentorship and skill building icon" />
                <h2>
                  Mentorship and Skill <br /> Building
                </h2>
                <p>
                  Members have the opportunity to mentor <br />
                  emerging talent, shaping the future of <br />
                  Azerbaijan's creative sectors and driving <br />
                  sustainable development.
                </p>
              </div>

              <div className=" collaborative-investment">
                <img
                  src={Exchange}
                  alt="Cultural exchange and global networking icon"
                />
                <h2>
                  Empowering Cultural <br /> Exchange
                </h2>
                <p>
                  Through global networking, the club strengthens <br />
                  connections between Azerbaijani <br />
                  creative ventures and international markets,
                  <br />
                  fostering a cross-border cultural dialogue
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
