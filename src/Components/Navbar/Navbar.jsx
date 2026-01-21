import React from 'react'
import { Link, useLocation } from "react-router-dom"
import logoImg from "../../assets/harshchouhan.png"

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-2">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logoImg}
            alt="Harsh Chouhan Logo"
            className="navbar-logo"
          />        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-1">
            {[
              { path: "/", label: "Home" },
              { path: "/project", label: "Projects" },
              { path: "/about", label: "About" },
              { path: "/contact-me", label: "Contact" }
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link px-3 py-2 rounded-pill fw-medium hoverC ${isActive(item.path)}`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <a href="/contact-me" className="navBtn">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar