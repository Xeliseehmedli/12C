import "./About.scss";
import C from "../assets/Logos.svg";
import world from "../assets/globe.svg";
import vector from "../assets/Vector (3).svg";
import Towers from "../assets/towersofire.png";
import { useEffect, useState } from "react";
export default function About() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "ourfocus",
        "ourteam",
        "benefits",
        "investment",
      ];
      let current = activeSection;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-logo">
            <img src={C} alt="12C logo" />
          </div>

          <div className="header-navigation">
            <ul>
              <li className={activeSection === "about" ? "active" : ""}>
                <a href="#about">About</a>
              </li>
              <li className={activeSection === "ourfocus" ? "active" : ""}>
                <a href="#ourfocus">Our focus</a>
              </li>
              <li className={activeSection === "ourteam" ? "active" : ""}>
                <a href="#ourteam">Our team</a>
              </li>
              <li className={activeSection === "benefits" ? "active" : ""}>
                <a href="#benefits">Benefits</a>
              </li>
              <li className={activeSection === "investment" ? "active" : ""}>
                <a href="#investment">Investment models</a>
              </li>
            </ul>
          </div>
          <section className="header-language-selector">
            <img src={world} alt="world icon" />
            <p>ENG</p>
            <div>
              <ul className={`language-dropdown ${open ? "show" : ""}`}>
                <li>AZE</li>
                <li>RUS</li>
                <li>FRA</li>
              </ul>
            </div>
            <img
              src={vector}
              alt="vector icon"
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(!open)}
            />
          </section>

          <div className="header-buttons">
            <button>Sign In</button>
            <button>Apply</button>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <div className="main-content">
            <div className="hero-text-container">
              <p>
                Don’t Hesitate <br />
                Invest2create
              </p>
              <p>
                Invest2Create (I2C) connects investors with high-potential
                opportunities in <br />
                Azerbaijan's culture and creative industries, spanning equity in
                tech startups,
                <br />
                royalty-based investments in music and film, and sponsorships
                for education <br />
                and infrastructure <span>read more...</span>
              </p>
              <div className="hero-buttons">
                <button>Apply</button>
                <button>Contact us</button>
              </div>
            </div>
            <div>
              <img src={Towers} alt="towers fire image" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
