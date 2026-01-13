import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./Projects.css";
import project1 from "../Assets/image1.png";
import project2 from "../Assets/image2.png";
import project3 from "../Assets/image3.png";


function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = { 
    dots: true, 
    infinite: true, 
    speed: 600, 
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
       { breakpoint: 1024, settings: { slidesToShow: 2 } }, 
       { breakpoint: 600, settings: { slidesToShow: 1 } } 
      ] 
    };

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with ReactJs, CSS, Bootstrap, and animations.",
      tech: ["ReactJs", "CSS", "Bootstrap"],
      image: project1,
      live: "https://yourportfolio.netlify.app",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Wandereve Tours And Travels",
      description: "An attractive tours and travels website built with HTML, CSS, and Bootstrap.",
      tech: ["HTML", "CSS", "Bootstrap"],
      image: project2,
      live: "https://rsshaikh.github.io/ToursAndTravelWebsite/",
      github: "https://rsshaikh.github.io/ToursAndTravelWebsite/"
    },
    {
      title: "Hopstacle Game",
      description: "A obstacle dodging game built using HTML, CSS, Bootstrap and JavaScript.",
      tech: ["Javascript", "HTML", "CSS", "Bootstrap"],
      image: project3,
      live: "https://rsshaikh.github.io/Hospstacle_Game/",
      github: "https://rsshaikh.github.io/Hospstacle_Game/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my favorite works.</p>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="col-md-4" key={index} data-aos="flip-left"data-aos-delay={index * 200}>
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-info">Live Demo</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
    </section>
  );
}

export default Projects;
