import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="container-fluid text-center bg-dark text-light">
      <div
        className="container bg-light"
        style={{
          borderBottomLeftRadius: '100px',
          borderBottomRightRadius: '100px',
        }}
      >
        <img
          src={footerlogo}
          alt="logo"
          className="mt-2"
          style={{ width: '200px', height: '90px' }}
        />

        <div className="container px-5 d-flex justify-content-center text-dark">
          <ul className="navbar-nav d-flex flex-row justify-content-center gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-bold me-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold me-3" to="/project">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold me-3" to="/contact-me">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold me-3" to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto w-25 p-3 d-flex justify-content-center gap-4">
          <FontAwesomeIcon icon={faGithub}  color="black" className='fs-4 icons' />
          <FontAwesomeIcon icon={faLinkedin}  color="black" className='fs-4 icons'/>
          <FontAwesomeIcon icon={faEnvelope}  color="black" className='fs-4 icons'/>
        </div>
      </div>

      <div className="card-footer text-light p-2">
        &copy; 2025 HC. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
