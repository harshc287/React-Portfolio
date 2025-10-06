import React from 'react';

// Example project images (replace with your actual images)
import project1Img from '../../src/assets/UserImg.png'
import project2Img from '../../src/assets/UserImg.png'
import project3Img from '../../src/assets/UserImg.png'

const projects = [
  {
    id: 1,
    title: 'Weather Web',
    description: 'A responsive web app built with React and Bootstrap.',
    img: project1Img,
    link: '#',
  },
  {
    id: 2,
    title: 'User Directory',
    description: 'An interactive dashboard using React and Chart.js.',
    img: project2Img,
    link: '#',
  },
  {
    id: 3,
    title: 'Todo Manager',
    description: 'A modern landing page with smooth animations.',
    img: project3Img,
    link: '#',
  },
];

function ProjectList() {
  return (
    <section className="container my-5" id="projects">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-12 col-md-6 col-lg-4" key={project.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={project.img}
                className="card-img-top"
                alt={project.title}
                style={{ objectFit: 'contain', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;

