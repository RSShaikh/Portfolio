import React from 'react'

export default function MyNavbar() {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home" data-aos="fade-right" >My Portfolio</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about" data-aos="fade-right">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills" data-aos="fade-right">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects" data-aos="fade-right">Projects</a></li>
            {/* <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li> */}
            <li className="nav-item"><a className="nav-link" href="#contact" data-aos="fade-right">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
