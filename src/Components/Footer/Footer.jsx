import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
import logoImg from "../../assets/harshchouhan.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact-me", label: "Contact" }
  ];

  const services = [
    "Full Stack Development",
    "React Applications",
    "API Development",
    "UI/UX Design",
    "Database Design",
    "Web Performance"
  ];

  const contactInfo = [
    { icon: faEnvelope, text: "chouhanharsh332@gmail.com", link: "mailto:chouhanharsh332@gmail.com" },
    { icon: "📍", text: "Pune, Maharashtra" },
    { icon: "⏰", text: "Available for freelance" }
  ];

  const socialLinks = [
    { icon: faGithub, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: faLinkedin, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: faTwitter, url: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: faInstagram, url: "https://instagram.com/yourusername", label: "Instagram" },
    { icon: faCodepen, url: "https://codepen.io/yourusername", label: "CodePen" }
  ];

  return (
    <footer className="footer-section">
      {/* Footer Wave */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(15, 23, 42, 0.95)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="row gy-5">
            {/* Brand Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand mb-4">
                <img
                  src={logoImg}
                  alt="Harsh Chouhan"
                  className="footer-logo mb-3"
                />
                <h3 className="fw-bold mb-3">Harsh Chouhan</h3>
                <p className="footer-text">
                  Passionate MERN Stack Developer creating modern, scalable, and 
                  visually engaging web experiences using cutting-edge technologies.
                </p>
              </div>

              <div className="footer-socials">
                {socialLinks.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={item.label}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-lg-2 col-md-6">
              <h5 className="footer-title mb-4">Quick Links</h5>
              <ul className="footer-links">
                {quickLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title mb-4">Services</h5>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service}>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title mb-4">Contact Info</h5>
              <ul className="footer-links">
                {contactInfo.map((info, index) => (
                  <li key={index} className="d-flex align-items-center gap-3 mb-3">
                    <span className="footer-icon">
                      {typeof info.icon === 'string' ? info.icon : <FontAwesomeIcon icon={info.icon} />}
                    </span>
                    {info.link ? (
                      <a href={info.link} className="text-decoration-none">
                        {info.text}
                      </a>
                    ) : (
                      <span>{info.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="newsletter mt-4">
                <h6 className="mb-3">Stay Updated</h6>
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email" 
                    aria-label="Email for newsletter"
                  />
                  <button className="btn-gradient" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="footer-divider my-5" />

          {/* Bottom Bar */}
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">
                © {currentYear} <strong className="text-gradient">Harsh Chouhan</strong>. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Built with <span className="heart">❤️</span> using React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;