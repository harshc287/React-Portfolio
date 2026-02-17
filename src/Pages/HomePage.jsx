import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRight, 
  faCode, 
  faServer, 
  faDatabase,
  faRocket,
  faDownload,
  
} from "@fortawesome/free-solid-svg-icons";

import { faReact, faNodeJs, faJsSquare } from "@fortawesome/free-brands-svg-icons";

import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import ContactPage from "./ContactPage"

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['MERN Stack Developer', 'Full Stack Engineer', 'React Specialist', 'JavaScript Expert'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing) {
      if (charIndex < roles[roleIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + roles[roleIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTyping(false);
          setTimeout(() => {
            setDisplayText('');
            setCharIndex(0);
            setRoleIndex((roleIndex + 1) % roles.length);
            setTyping(true);
          }, 1500);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, roleIndex, typing]);

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "6+", label: "Months Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Availability" }
  ];

  const techStack = [
    { icon: faReact, name: "React", color: "#61DAFB" },
    { icon: faNodeJs, name: "Node.js", color: "#339933" },
    { icon: faDatabase, name: "MongoDB", color: "#47A248" },
    { icon: faJsSquare, name: "JavaScript", color: "#F7DF1E" }
  ];

  return (
    <>
    <section className="hero-section min-vh-100 d-flex align-items-center">
      <div className="hero-overlay"></div>
      
      <div className="container position-relative z-3">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-7">
            <div className="hero-glass p-4 p-md-5 rounded-4 fade-in-up">
              <h6 className="text-gradient-primary mb-3">
                <FontAwesomeIcon icon={faCode} className="me-2" />
                WELCOME TO MY PORTFOLIO
              </h6>
              
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-gradient">Harsh Chouhan</span>
              </h1>
              
              <h2 className="fs-1 fw-bold mb-4">
                <span className="typed-text">{displayText}</span>
                <span className="blinking-cursor">|</span>
              </h2>
              
              <p className="lead mb-4 opacity-75">
                Passionate MERN Stack Developer crafting scalable web applications with modern technologies. 
                I transform complex problems into elegant, efficient solutions with clean code and best practices.
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h6 className="mb-3 text-white-80">Tech Stack</h6>
                <div className="d-flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <div key={index} className="tech-badge d-flex align-items-center gap-2">
                      <FontAwesomeIcon 
                        icon={tech.icon} 
                        className="fs-4"
                        style={{ color: tech.color }}
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link to="/projects" className="btn-gradient">
                  View My Work
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link to="/contact-me" className="btn-outline-gradient">
                  Let's Connect
                </Link>
                <a 
                  href="/resume.pdf" 
                  className="btn-outline-gradient"
                  download
                >
                  <FontAwesomeIcon icon={faDownload} />
                  Resume
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Stats & Visual */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="position-relative">
              {/* Floating Tech Icons */}
              <div className="floating-icon" style={{top: '10%', left: '5%'}}>
                <FontAwesomeIcon icon={faReact} className="text-primary fs-2" />
              </div>
              <div className="floating-icon" style={{top: '30%', right: '10%'}}>
                <FontAwesomeIcon icon={faServer} className="text-success fs-2" />
              </div>
              <div className="floating-icon" style={{bottom: '20%', left: '10%'}}>
                <FontAwesomeIcon icon={faDatabase} className="text-warning fs-2" />
              </div>
              
              {/* Stats Cards */}
              <div className="glass-card p-4 mt-4">
                <div className="row g-3">
                  {stats.map((stat, index) => (
                    <div className="col-6" key={index}>
                      <div className="text-center p-3">
                        <div className="fs-2 fw-bold text-gradient">{stat.value}</div>
                        <div className="text-white-80">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Animated Orbit */}
              <div className="tech-orbit mt-5">
                <div className="orbit orbit-1"></div>
                <div className="orbit orbit-2"></div>
                <div className="orbit orbit-3"></div>
                <div className="central-dot d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faRocket} className="fs-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="text-white-60 mt-2 d-block">Scroll to explore</span>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(255,255,255,0.03)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
    </section>
   
    <AboutMe/>
    <ProjectList/>
    <ContactPage/>
     </>

  );
};

export default HomePage;