import React from 'react'
import aboutMeImg from "../../assets/aboutMe.avif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope, faBriefcase, faLightbulb, faCalendarAlt, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">
        <div className="col-lg-6 text-center">
          <div className="position-relative">
            <img 
              src={aboutMeImg} 
              alt="Harsh Chouhan" 
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4 border-4 border-white" style={{borderColor: 'rgba(255,255,255,0.3)'}}></div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="ps-lg-4">
            <h6 className="text-gradient-primary mb-2">INTRODUCTION</h6>
            <h1 className="display-4 fw-bold mb-4">About <span className="text-gradient">Me</span></h1>
            
            <p className="lead mb-4">
              I'm <span className="fw-bold text-primary">Harsh Chouhan</span>, a passionate Frontend Developer specializing in creating beautiful, functional, and responsive web applications. With expertise in modern technologies, I transform ideas into engaging digital experiences.
            </p>
            
            <p className="mb-4">
              My journey in web development combines creativity with technical expertise, allowing me to build applications that are both visually stunning and highly performant. I believe in writing clean, maintainable code and following best practices.
            </p>
            
            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#" className="btn-gradient d-inline-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faDownload} />
                Download Resume
              </a>
              <a href="/contact-me" className="btn-outline-gradient d-inline-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm hover-lift">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-wrapper rounded-circle bg-primary bg-opacity-10 p-3">
                    <FontAwesomeIcon icon={faBriefcase} className="text-primary fs-4" />
                  </div>
                  <h4 className="mb-0">Modern Work</h4>
                </div>
                <p className="text-muted mb-0">
                  Creating responsive web applications with React, TypeScript, and modern CSS frameworks that deliver exceptional user experiences.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm hover-lift">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-wrapper rounded-circle bg-success bg-opacity-10 p-3">
                    <FontAwesomeIcon icon={faLightbulb} className="text-success fs-4" />
                  </div>
                  <h4 className="mb-0">Smart Solutions</h4>
                </div>
                <p className="text-muted mb-0">
                  Implementing efficient code architecture and performance optimization techniques for scalable and maintainable applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="row g-4 mt-5">
        <div className="col-md-4">
          <div className="card border-0 shadow-lg p-4 text-center hover-lift">
            <div className="icon-wrapper rounded-circle bg-primary bg-opacity-10 p-3 mx-auto mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-primary fs-2" />
            </div>
            <h3 className="fw-bold mb-2">Experience</h3>
            <p className="text-muted mb-0">1+ Years of Frontend Development Experience</p>
            <div className="mt-3">
              <span className="badge bg-primary bg-opacity-10 text-primary fs-6 px-3 py-2">React • TypeScript • JavaScript</span>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card border-0 shadow-lg p-4 text-center hover-lift">
            <div className="icon-wrapper rounded-circle bg-success bg-opacity-10 p-3 mx-auto mb-3">
              <FontAwesomeIcon icon={faGraduationCap} className="text-success fs-2" />
            </div>
            <h3 className="fw-bold mb-2">Education</h3>
            <p className="text-muted mb-0">B.Tech in Data Science</p>
            <p className="fw-bold mb-0">IPS Academy, Indore</p>
            <div className="mt-3">
              <span className="badge bg-success bg-opacity-10 text-success fs-6 px-3 py-2">2020 - 2024</span>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card border-0 shadow-lg p-4 text-center hover-lift">
            <div className="icon-wrapper rounded-circle bg-warning bg-opacity-10 p-3 mx-auto mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-warning fs-2" />
            </div>
            <h3 className="fw-bold mb-2">Location</h3>
            <p className="text-muted mb-0">Currently based in</p>
            <p className="fw-bold mb-0">Pune, Maharashtra</p>
            <div className="mt-3">
              <span className="badge bg-warning bg-opacity-10 text-warning fs-6 px-3 py-2">Available for Work</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-0 shadow-lg p-5">
            <h2 className="text-center mb-4">Technical Skills</h2>
            <div className="row g-4">
              {['React.js', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'Bootstrap', 'Tailwind CSS', 'Git/GitHub', 'REST APIs'].map((skill, index) => (
                <div className="col-6 col-md-3" key={index}>
                  <div className="d-flex flex-column align-items-center p-3">
                    <div className="skill-icon mb-2" style={{fontSize: '2rem'}}>
                      {getSkillIcon(skill)}
                    </div>
                    <span className="fw-bold">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function for skill icons
const getSkillIcon = (skill) => {
  const icons = {
    'React.js': '⚛️',
    'JavaScript': '🟨',
    'TypeScript': '🟦',
    'HTML5/CSS3': '🎨',
    'Bootstrap': '🚀',
    'Tailwind CSS': '🎯',
    'Git/GitHub': '📊',
    'REST APIs': '🔌'
  }
  return icons[skill] || '💻'
}

export default About