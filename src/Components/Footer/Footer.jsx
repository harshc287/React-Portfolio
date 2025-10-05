import React from 'react'
import {Link} from "react-router-dom"
import footerlogo from '../../assets/logo.png'
import "@fortawesome/fontawesome-free/css/all.min.css";

const footer = () => {
  return (
<div className="container-fluid text-center bg-dark text-light ">
  <div className='container bg-light' style={{borderBottomLeftRadius: "100px",
                                              borderBottomRightRadius: "100px",}}>
  
    <img src={footerlogo} alt="" className='mt-2' style={{width: "200px", height: "90px"}}/>
    

  <div className="container px-5 d-flex justify-content-center text-dark">
     <ul className="navbar-nav d-flex flex-row justify-content-center gap-3">
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3" aria-current="page" to="/">Home</Link>
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

<div className=' mx-auto w-25 mb-3'>

<i className="fab fa-github me-2 fs-5"></i>
<i className="fab fa-linkedin me-2 fs-5"></i>
<i className="fas fa-envelope me-2 fs-5"></i>
</div>
</div>
  <div className="card-footer text-light p-2">
    &copy; 2025 HC. All Right Reserved
  </div>
</div>
  )
}


export default footer
