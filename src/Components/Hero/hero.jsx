import React from 'react'
import userImg from '../../assets/UserImg.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-6 fade-in-up">
            <div className="pe-lg-4">
              <h6 className="text-primary mb-3">WELCOME TO MY PORTFOLIO</h6>
              <h1 className="display-3 fw-bold mb-4">
                Hi, I'm <span className="text-gradient">Harsh Chouhan</span>
              </h1>
              <h2 className="fs-1 fw-bold mb-4">
                <span className="typed-text">Frontend Developer</span>
              </h2>
              <p className="lead mb-4 opacity-75">
                I specialize in creating modern, responsive web applications with cutting-edge technologies. 
                Passionate about building user-friendly interfaces and solving complex problems through code.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="/contact-me" className="btn-gradient">
                  Let's Connect
                </a>
                <a href="#projects" className="btn-outline-gradient">
                  View Projects
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 text-center fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="position-relative d-inline-block">
              <img
                src={userImg}
                alt="Harsh Chouhan"
                className="img-fluid rounded-circle shadow-lg"
                style={{ 
                  maxHeight: "450px",
                  border: '8px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border-4 border-white border-opacity-25"></div>
              <div className="floating-elements">
                <div className="floating-element element-1 bg-primary rounded-circle"></div>
                <div className="floating-element element-2 bg-secondary rounded-circle"></div>
                <div className="floating-element element-3 bg-success rounded-circle"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator position-absolute start-50 translate-middle-x" style={{bottom: '30px'}}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero