import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../Assets/profile4.png"; // your image path
import resumePdf from "../Assets/Rukhsar_Resume_Portfolio.pdf"; // your resume path

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-md-6 text-light" data-aos="fade-right">
            <h2>Hello, It's Me</h2>
            <h1 className="typewriter">
              <Typewriter
                words={["Rukhsar Shaikh"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <h3>
              And I'm a{" "}
              <span className="typewriter">
                <Typewriter
                  words={["Full Stack Developer", "React Enthusiast", "Tech Explorer", "Java Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p>
              I am keen to get into the industry as a Full Stack Developer where I can utilize my skills and contribute to exciting projects.
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/rukhsar-shaikh-007a692a9/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/RSShaikh" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://app.netlify.com/teams/shaikhrukhsaar4/projects" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i> {/* Globe icon used for Netlify */}
              </a>
            </div>

            <a href={resumePdf} className="btn btn-info mt-3" download>Download CV</a>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <div className="hexagon">
              <img src={profileImg} alt="Profile" className="floating-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;