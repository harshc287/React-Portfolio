import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faJsSquare, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    id: 1,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with interactive maps and detailed forecasts using OpenWeather API.',
    tech: ['React', 'Chart.js', 'Bootstrap'],
    github: '#',
    live: '#',
    icon: faReact,
    color: 'primary'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with cart functionality, user authentication, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    icon: faJsSquare,
    color: 'warning'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Productivity application with drag-and-drop functionality, reminders, and team collaboration features.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: '#',
    live: '#',
    icon: faBootstrap,
    color: 'success'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations, responsive design, and dark mode toggle.',
    tech: ['React', 'Framer Motion', 'SASS'],
    github: '#',
    live: '#',
    icon: faReact,
    color: 'info'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with real-time data visualization and reporting.',
    tech: ['React', 'D3.js', 'Firebase'],
    github: '#',
    live: '#',
    icon: faJsSquare,
    color: 'danger'
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Health and fitness application with workout plans, progress tracking, and nutrition logging.',
    tech: ['React Native', 'Redux', 'GraphQL'],
    github: '#',
    live: '#',
    icon: faReact,
    color: 'purple'
  },
];

function ProjectList() {
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-gradient-primary mb-2">MY WORK</h6>
          <h1 className="display-4 fw-bold mb-3">Featured <span className="text-gradient">Projects</span></h1>
          <p className="lead text-muted">
            Explore my recent work where creativity meets functionality
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="card border-0 shadow-lg h-100 project-card hover-lift">
                <div className="position-relative overflow-hidden">
                  <div className="card-img-top" style={{
                    height: '200px',
                    background: `linear-gradient(135deg, var(--${project.color}-color) 0%, var(--dark-color) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FontAwesomeIcon 
                      icon={project.icon} 
                      className="text-white fs-1"
                      style={{opacity: 0.8}}
                    />
                  </div>
                  <div className="overlay">
                    <div className="text-center p-4">
                      <a href={project.live} className="btn btn-light rounded-circle p-3 mb-2">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                      <p className="text-white mb-0">View Live Demo</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className={`badge bg-${project.color} bg-opacity-10 text-${project.color} px-3 py-2`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <a 
                      href={project.github}
                      className="text-decoration-none text-dark"
                    >
                      <FontAwesomeIcon icon={faGithub} className="me-2" />
                      View Code
                    </a>
                    <a 
                      href={project.live}
                      className={`btn btn-${project.color} btn-sm px-3`}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="#" className="btn-gradient px-4 py-3">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;