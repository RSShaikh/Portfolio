import React from "react";
// import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          A snapshot of the technologies I work with and love.
        </p>

        <div className="row">
          {/* Left side: Progress bars */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="skill">
              <div className="skill">
              <h5>Bootstrap</h5>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{width: "75%"}}>75%</div>
              </div>
            </div>
              <h5>React.js</h5>
              <div className="progress">
                <div className="progress-bar bg-info" style={{width: "90%"}}>90%</div>
              </div>
            </div>
            <div className="skill">
              <h5>Java</h5>
              <div className="progress">
                <div className="progress-bar bg-success" style={{width: "85%"}}>85%</div>
              </div>
            </div>
            <div className="skill">
              <h5>MySql</h5>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{width: "80%"}}>80%</div>
              </div>
            </div>
            
          </div>

          {/* Right side: Skill cards */}
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
            <div className="skill-card">
              <i className="fab fa-react"></i>
              <h4>Frontend Development</h4>
              <p>Building responsive, dynamic UIs with React, HTML, CSS, Javascript and Bootstrap.</p>
            </div>
            <div className="skill-card">
              <i className="fab fa-node-js"></i>
              <h4>Backend Development</h4>
              <p>Creating scalable APIs and server-side apps with Java Springboot and Rest APIs</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-database"></i>
              <h4>Database Management</h4>
              <p>Designing and managing databases with MySql.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
