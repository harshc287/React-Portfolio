import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faReact, 
  faNodeJs, 
  faJsSquare,
  faPython
} from '@fortawesome/free-brands-svg-icons';
import { 
  faExternalLinkAlt, 
  faDatabase,
  faServer,
  faMobileAlt,
  faCode,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

const ProjectList = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured MERN stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      longDescription: 'A complete online shopping platform with product management, user authentication, payment gateway integration, order tracking, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      github: '#',
      live: '#',
      icon: faReact,
      category: 'full-stack',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task manager with drag-drop functionality and team management features.',
      longDescription: 'A productivity application with real-time collaboration, drag-and-drop task organization, team management, and progress tracking.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      github: '#',
      live: '#',
      icon: faNodeJs,
      category: 'full-stack',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps and detailed forecasts using OpenWeather API.',
      longDescription: 'A weather dashboard providing real-time weather data, 7-day forecasts, interactive maps, and location-based weather alerts.',
      tech: ['React', 'Chart.js', 'API Integration', 'Bootstrap'],
      github: '#',
      live: '#',
      icon: faJsSquare,
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with real-time data visualization and reporting.',
      longDescription: 'A comprehensive dashboard for tracking social media performance with data visualization, analytics, and reporting features.',
      tech: ['React', 'D3.js', 'Firebase', 'Material-UI'],
      github: '#',
      live: '#',
      icon: faDatabase,
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Health and fitness application with workout plans, progress tracking, and nutrition logging.',
      longDescription: 'A comprehensive fitness tracking application with personalized workout plans, nutrition tracking, progress analytics, and goal setting.',
      tech: ['React Native', 'Redux', 'GraphQL', 'Firebase'],
      github: '#',
      live: '#',
      icon: faMobileAlt,
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      status: 'Planning'
    },
    {
      id: 6,
      title: 'API Management System',
      description: 'Backend system for managing APIs with authentication, rate limiting, and analytics.',
      longDescription: 'A robust API management system with features like authentication, rate limiting, analytics dashboard, and API documentation generation.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT'],
      github: '#',
      live: '#',
      icon: faServer,
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      status: 'Completed'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'full-stack', label: 'Full Stack', count: projects.filter(p => p.category === 'full-stack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'warning';
      case 'Planning': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5 fade-in">
          <h6 className="text-gradient-primary mb-2">MY WORK</h6>
          <h1 className="display-4 fw-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="lead text-white-80 mx-auto" style={{ maxWidth: "700px" }}>
            Explore my recent work where creativity meets functionality and innovation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`btn ${filter === category.id ? 'btn-gradient' : 'btn-outline-gradient'} px-4 py-2`}
              onClick={() => setFilter(category.id)}
            >
              <FontAwesomeIcon icon={faFilter} className="me-2" />
              {category.label}
              <span className="badge bg-dark bg-opacity-50 ms-2">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="project-card card border-0 shadow-lg h-100 hover-lift">
                {/* Project Image */}
                <div className="position-relative overflow-hidden">
                  <div 
                    className="project-image"
                    style={{
                      height: '200px',
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className={`badge bg-${getStatusColor(project.status)} bg-opacity-25 text-${getStatusColor(project.status)} px-3 py-2`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="project-overlay">
                    <div className="text-center p-4">
                      <a 
                        href={project.live} 
                        className="btn btn-light rounded-circle p-3 mb-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                      <p className="text-white mb-0">View Live Demo</p>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <FontAwesomeIcon icon={project.icon} className="text-primary fs-3" />
                    <div>
                      <h5 className="card-title fw-bold mb-0">{project.title}</h5>
                      <small className="text-white-60">{project.category.replace('-', ' ').toUpperCase()}</small>
                    </div>
                  </div>
                  
                  <p className="card-text text-white-80 mb-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-3">
                    <h6 className="mb-2">Technologies</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="badge bg-dark bg-opacity-50 px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <a 
                      href={project.github}
                      className="text-decoration-none text-white-80 d-flex align-items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>Code</span>
                    </a>
                    <div className="d-flex gap-2">
                      <a 
                        href={project.github}
                        className="btn btn-outline-light btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      <a 
                        href={project.live}
                        className="btn-gradient btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5 fade-in">
          <div className="glass-card p-5">
            <h3 className="mb-3">Have a project in mind?</h3>
            <p className="text-white-80 mb-4">
              Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <a href="/contact-me" className="btn-gradient px-5 py-3">
              <FontAwesomeIcon icon={faCode} className="me-2" />
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;