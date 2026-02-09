import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faBriefcase,
  faLightbulb,
  faCalendarAlt,
  faGraduationCap,
  faMapMarkerAlt,
  faCode,
  faServer,
  faDatabase,
  faPalette
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faJsSquare,
  faPython,
  faGitAlt,
  faAws
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  const skills = [
    { name: "React.js", icon: faReact, level: 90, color: "#61DAFB" },
    { name: "Node.js", icon: faNodeJs, level: 85, color: "#339933" },
    { name: "JavaScript", icon: faJsSquare, level: 95, color: "#F7DF1E" },
    { name: "MongoDB", icon: faDatabase, level: 80, color: "#47A248" },
    { name: "Express.js", icon: faServer, level: 85, color: "#000000" },
    { name: "Python", icon: faPython, level: 75, color: "#3776AB" },
    { name: "Git/GitHub", icon: faGitAlt, level: 90, color: "#F05032" },
    { name: "AWS", icon: faAws, level: 70, color: "#FF9900" }
  ];

  const highlights = [
    {
      icon: faCode,
      title: "Frontend Development",
      description: "Building responsive, accessible web applications using React, Next.js, and modern CSS frameworks.",
      color: "primary"
    },
    {
      icon: faServer,
      title: "Backend Development",
      description: "Creating scalable server-side applications and RESTful APIs with Node.js and Express.",
      color: "success"
    },
    {
      icon: faDatabase,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for performance.",
      color: "warning"
    },
    {
      icon: faPalette,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with focus on user experience and accessibility.",
      color: "info"
    }
  ];

  const experiences = [
    {
      period: "2024 - Present",
      role: "MERN Stack Developer",
      company: "Freelance",
      description: "Building full-stack applications for various clients using React, Node.js, and MongoDB."
    },
    {
      period: "2023 - 2024",
      role: "Web Development Intern",
      company: "Tech Solutions Inc.",
      description: "Developed responsive web applications and collaborated with senior developers on large projects."
    }
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5 fade-in">
          <h6 className="text-gradient-primary mb-2">GET TO KNOW ME</h6>
          <h1 className="display-4 fw-bold mb-3">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="lead text-white-80 mx-auto" style={{ maxWidth: "700px" }}>
            Passionate developer with expertise in modern web technologies and a drive to create exceptional digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="row gy-5 mb-5">
          {/* Left Column - Introduction */}
          <div className="col-lg-6">
            <div className="glass-card p-4 p-md-5 h-100 fade-in-up">
              <h3 className="mb-4">My Journey</h3>
              <p className="text-white-80 mb-4">
                Hi, I'm <strong className="text-gradient">Harsh Chouhan</strong>, a passionate 
                <strong> MERN Stack Developer</strong> based in Pune, Maharashtra. 
                With a strong foundation in Data Science and hands-on experience in web development, 
                I create robust and scalable applications.
              </p>
              
              <p className="text-white-80 mb-4">
                My journey began with a curiosity about how things work on the web, which evolved 
                into a passion for building solutions that make a difference. I believe in writing 
                clean, maintainable code and following industry best practices.
              </p>
              
              <p className="text-white-80 mb-4">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/contact-me" className="btn-gradient">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Contact Me
                </Link>
                <a 
                  href="/resume.pdf" 
                  className="btn-outline-gradient"
                  download
                >
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="col-lg-6">
            <div className="row g-4">
              {highlights.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card h-100 border-0 shadow-sm hover-lift p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className={`icon-wrapper rounded-circle bg-${item.color} bg-opacity-10 p-3`}>
                        <FontAwesomeIcon 
                          icon={item.icon} 
                          className={`text-${item.color} fs-4`}
                        />
                      </div>
                      <h4 className="mb-0">{item.title}</h4>
                    </div>
                    <p className="text-white-80 mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-5">
          <h2 className="text-center mb-5">Technical Skills</h2>
          <div className="row g-4">
            {skills.map((skill, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="skill-item text-center p-4 glass-card">
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className="fs-1 mb-3"
                    style={{ color: skill.color }}
                  />
                  <h5 className="mb-2">{skill.name}</h5>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                      }}
                    ></div>
                  </div>
                  <span className="text-white-60 mt-2 d-block">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education */}
        <div className="row g-5">
          {/* Experience */}
          <div className="col-lg-6">
            <div className="glass-card p-4 p-md-5 h-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faBriefcase} className="text-primary fs-3" />
                <h3 className="mb-0">Experience</h3>
              </div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item mb-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5 className="mb-1">{exp.role}</h5>
                      <p className="text-white-80 mb-0">{exp.company}</p>
                    </div>
                    <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-white-60">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Location */}
          <div className="col-lg-6">
            <div className="glass-card p-4 p-md-5 h-100">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="text-center p-3">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-success fs-1 mb-3" />
                    <h4>Education</h4>
                    <p className="text-white-80 mb-1">B.Tech in Data Science</p>
                    <p className="fw-bold">IPS Academy, Indore</p>
                    <span className="badge bg-success bg-opacity-25 text-success px-3 py-2">
                      2021 - 2025
                    </span>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="text-center p-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-warning fs-1 mb-3" />
                    <h4>Location</h4>
                    <p className="text-white-80 mb-1">Based in</p>
                    <p className="fw-bold">Pune, Maharashtra</p>
                    <span className="badge bg-warning bg-opacity-25 text-warning px-3 py-2">
                      Available for Work
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="mb-3">Languages</h5>
                <div className="d-flex flex-wrap gap-2">
                  {['Hindi (Native)', 'English (Fluent)', 'Marathi (Conversational)'].map((lang, idx) => (
                    <span key={idx} className="badge bg-dark bg-opacity-50 px-3 py-2">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;