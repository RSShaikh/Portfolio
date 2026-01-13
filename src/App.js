// import logo from './logo.svg';
// import './App.css';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MyNavbar from "./Components/MyNavbar";
// import Home from "./Pages/Home"; 
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import AOS from "aos"; 
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => { 
    AOS.init({ 
      duration: 1000, // animation duration
      once: false, // animate only once 
      offset: 100, // trigger point 
      easing: "ease-in-out",
      });
     }, []);
  return (
    <>
      <MyNavbar/>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      </>
  );
}

export default App;