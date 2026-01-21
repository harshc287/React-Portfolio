import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <img
              src={footerlogo}
              alt="HC Portfolio"
              className="mb-4"
              style={{ width: '180px', height: 'auto' }}
            />
            <p className="text-light mb-4">
              Creating beautiful, functional web experiences with modern technologies and best practices.
            </p>
            <div className="d-flex gap-3">
              {[
                { icon: faGithub, link: '#' },
                { icon: faLinkedin, link: '#' },
                { icon: faTwitter, link: '#' },
                { icon: faInstagram, link: '#' },
                { icon: faEnvelope, link: 'mailto:harsh@example.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="icons d-flex align-items-center justify-content-center"
                  style={{
                    width: '45px',
                    height: '45px',
                    color: '#fff'
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} className="fs-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item} className="mb-2">
                  <Link 
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-decoration-none text-light hover-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4">
            <h5 className="fw-bold mb-4">Services</h5>
            <ul className="list-unstyled">
              {['Frontend Development', 'React Applications', 'Responsive Design', 'UI/UX Design'].map((service) => (
                <li key={service} className="mb-2">
                  <span className="text-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4">
            <h5 className="fw-bold mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-light">📍 Pune, Maharashtra</span>
              </li>
              <li className="mb-2">
                <a href="mailto:harsh@example.com" className="text-decoration-none text-light">
                  📧 harsh@example.com
                </a>
              </li>
              <li className="mb-2">
                <span className="text-light">⏰ Available for freelance work</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-5 opacity-25" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {currentYear} Harsh Chouhan. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Built with <span className="text-danger">❤️</span> using React & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer