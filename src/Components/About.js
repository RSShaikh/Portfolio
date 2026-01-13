import React from "react";
// import "./About.css";
import profileImg from "../Assets/profile4.png";
import resumePdf from "../Assets/Rukhsar_Resume_Portfolio.pdf"; // your resume path

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-5 text-center" data-aos="zoom-in">
            <img src={profileImg} alt="Profile" className="about-img" />
          </div>

          {/* Right side content */}
          <div className="col-md-7" data-aos="fade-up" data-aos-delay="200" >
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              I’m Rukhsar, a passionate Full Stack Developer with expertise in React, Java, and MySql.
              I love building scalable web applications and crafting modern user experiences.
            </p>

            <div className="about-cards">
              <div className="card">
                <h4>🎯 Mission</h4>
                <p>Deliver clean, efficient, and impactful solutions for real-world problems.</p>
              </div>
              <div className="card">
                <h4>💡 Skills</h4>
                <p>HTML ,CSS ,JavaScript ,React.js ,Java ,MySql,Springboot,Rest APIs</p>
              </div>
              <div className="card">
                <h4>🚀 Vision</h4>
                <p>To grow as a developer and contribute to innovative projects worldwide.</p>
              </div>
            </div>

            <a href={resumePdf} className="btn btn-info mt-3" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
