import React from 'react'
import {Link} from "react-router-dom"


const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid px-5">
<Link className="navbar-brand fw-bolder" href="#">RMHC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/project">Project</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact-me">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
          <div className="d-none d-xs-none d-md-block">
          <button className="btn btn-outline-primary rounded-1 ">
            Get started
          </button>
        </div>
  </div>
</nav>
  )
}

export default navbar
