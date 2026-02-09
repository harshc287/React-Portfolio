import React from "react";
import aboutMeImg from "../../assets/aboutMe.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faBriefcase,
  faLightbulb,
  faCalendarAlt,
  faGraduationCap,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  "React.js",
  "JavaScript",
  "HTML5/CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Git/GitHub",
  "REST APIs",
  "Postman",
];

// Update the About component content with this structure:

const About = () => {
  return (
    <section className="container py-5" id="about">
      {/* ... existing structure ... */}
      
      <p className="lead">
        Hi, I'm <strong className="text-gradient">Harsh Chouhan</strong> — a passionate 
        <strong className="text-primary"> MERN Stack Developer</strong> specializing in 
        building full-stack web applications with MongoDB, Express.js, React, and Node.js.
      </p>

      <p className="text-muted">
        I create robust, scalable solutions that deliver exceptional user experiences. 
        My expertise spans from designing responsive UIs to implementing RESTful APIs 
        and database architectures.
      </p>

      {/* MERN Stack Expertise Section */}
      <div className="row g-4 mt-4">
        {[
          {
            icon: '⚛️',
            title: 'Frontend Development',
            tech: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS'],
            desc: 'Building dynamic, responsive user interfaces with modern React ecosystem'
          },
          {
            icon: '🚀',
            title: 'Backend Development',
            tech: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
            desc: 'Creating scalable server-side applications and APIs'
          },
          {
            icon: '🗄️',
            title: 'Database Management',
            tech: ['MongoDB', 'Mongoose', 'Firebase', 'MySQL'],
            desc: 'Designing and optimizing database schemas and queries'
          }
        ].map((stack, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 border-0 shadow-sm p-4 hover-lift">
              <div className="fs-2 mb-3">{stack.icon}</div>
              <h4 className="mb-3">{stack.title}</h4>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {stack.tech.map((tech) => (
                  <span key={tech} className="badge bg-dark bg-opacity-25 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted mb-0">{stack.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* ... rest of the component ... */}
    </section>
  );
};

const StatCard = ({ icon, title, text, badge, color }) => (
  <div className="col-md-4">
    <div className="card border-0 shadow-lg p-4 hover-lift">
      <FontAwesomeIcon icon={icon} className={`fs-2 text-${color} mb-3`} />
      <h4>{title}</h4>
      <p className="text-muted mb-2">{text}</p>
      <span className={`badge bg-${color} bg-opacity-10 text-${color}`}>
        {badge}
      </span>
    </div>
  </div>
);

const getSkillIcon = (skill) => {
  const icons = {
    "React.js": "⚛️",
    JavaScript: "🟨",
    "HTML5/CSS3": "🎨",
    Bootstrap: "🚀",
    "Tailwind CSS": "🎯",
    "Git/GitHub": "🐙",
    "REST APIs": "🔌",
    Postman: "📮",
  };
  return icons[skill] || "💻";
};

export default About;
