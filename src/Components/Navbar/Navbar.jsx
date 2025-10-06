import React from 'react'
import {Link} from "react-router-dom"
import logoImg from '../../assets/logo.png'


const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid px-5">
    <img src={logoImg} alt=""  style={{width: "130px", height: "50px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      
      <ul className="navbar-nav gap-2 ">
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3 hoverC" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3 hoverC" to="/project">Project</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3 hoverC" to="/contact-me">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3 hoverC" to="/about">About</Link>
        </li>
      </ul>
    </div>
          <div className="d-none d-xs-none d-md-block">
          <button className="btn-dark navBtn">
            Get started
          </button>
        </div>
  </div>
</nav>
  )
}

export default navbar
