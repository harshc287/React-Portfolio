import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode, faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['MERN Stack Developer', 'Full Stack Developer', 'React Specialist', 'Node.js Expert'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section className="hero-section min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-glass p-5 rounded-4">
              <h6 className="text-gradient-primary mb-3">WELCOME TO MY PORTFOLIO</h6>
              
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-gradient">Harsh Chouhan</span>
              </h1>
              
              <h2 className="fs-1 fw-bold mb-4">
                <span className="typed-text">{displayText}</span>
                <span className="blinking-cursor">|</span>
              </h2>
              
              <p className="lead mb-4 opacity-75">
                Passionate MERN Stack Developer with expertise in building scalable web applications. 
                I transform complex problems into elegant, efficient solutions with clean code and modern technologies.
              </p>

              {/* Tech Stack Badges */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind', 'Redux'].map((tech) => (
                  <span key={tech} className="badge bg-dark bg-opacity-50 border border-light border-opacity-25 px-3 py-2">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/projects" className="btn-gradient d-flex align-items-center gap-2">
                  View My Work
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link to="/contact-me" className="btn-outline-gradient">
                  Let's Connect
                </Link>
              </div>

              {/* Stats */}
              <div className="row mt-5 pt-4 border-top border-light border-opacity-25">
                <div className="col-4 text-center">
                  <div className="fs-3 fw-bold text-gradient">10+</div>
                  <div className="text-light opacity-75">Projects</div>
                </div>
                <div className="col-4 text-center">
                  <div className="fs-3 fw-bold text-gradient">6+</div>
                  <div className="text-light opacity-75">Months Experience</div>
                </div>
                <div className="col-4 text-center">
                  <div className="fs-3 fw-bold text-gradient">100%</div>
                  <div className="text-light opacity-75">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 d-none d-lg-block">
            <div className="position-relative">
              {/* Animated Tech Icons */}
              <div className="floating-icon" style={{top: '20%', left: '10%'}}>
                <FontAwesomeIcon icon={faCode} className="text-primary fs-1" />
              </div>
              <div className="floating-icon" style={{top: '40%', right: '15%'}}>
                <FontAwesomeIcon icon={faServer} className="text-success fs-1" />
              </div>
              <div className="floating-icon" style={{bottom: '30%', left: '15%'}}>
                <FontAwesomeIcon icon={faDatabase} className="text-warning fs-1" />
              </div>
              
              {/* Main Illustration */}
              <div className="tech-illustration text-center">
                <div className="position-relative d-inline-block">
                  <div className="orbit orbit-1"></div>
                  <div className="orbit orbit-2"></div>
                  <div className="orbit orbit-3"></div>
                  <div className="central-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;