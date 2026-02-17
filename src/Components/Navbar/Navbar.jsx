import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logoImg from "../../assets/harshchouhan.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact-me", label: "Contact" }
  ];

  const socialLinks = [
    { icon: faGithub, url: "https://github.com/harshc287", label: "GitHub" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/harsh-chouhan-b5aa1329a/", label: "LinkedIn" }
    
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top py-3 ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand d-flex align-items-center" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img
            src={logoImg}
            alt="Harsh Chouhan - MERN Stack Developer"
            className="navbar-logo me-2"
            style={{ height: "45px" }}
          />
          <div className="d-flex flex-column">
            <span className="fw-bold fs-5">Harsh Chouhan</span>
            <small className="text-white-60 d-none d-md-block">MERN Stack Developer</small>
          </div>
        </div>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="fs-4" />
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item mx-1" key={item.path}>
                <Link
                  className={`nav-link px-3 py-2 rounded-pill fw-medium position-relative ${
                    isActive(item.path) ? 'active' : ''
                  }`}
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="active-indicator"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="d-flex align-items-center">
            <div className="social-icons d-none d-lg-flex me-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-80 mx-2"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="fs-5" />
                </a>
              ))}
            </div>
            <Link 
              to="/contact-me" 
              className="btn-gradient btn-sm d-flex align-items-center"
            >
              <FontAwesomeIcon icon={faCode} className="me-2" />
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;