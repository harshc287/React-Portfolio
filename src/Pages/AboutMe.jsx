import React from 'react'
import aboutMeImg from "../../src/assets/aboutMe.avif"

function AboutMe() {
  return (
<div className="container">
  <div className="row align-items-center">
    <div className="col-md-6 mb-4 mb-md-0 text-center">
      <img src={aboutMeImg} alt="About Me" className="img-fluid" style={{ maxHeight: '500px' }} />
    </div>
    
    <div className="col-md-6">
      <h1 className="mb-3">-ABOUT ME</h1>
      <p className="lead fs-5">
        I’m Harsh Chouhan, a Frontend Developer who brings designs to life with clean, responsive, and interactive web interfaces. 
        I love working with React, JavaScript, HTML, and CSS to create seamless user experiences.
        I aim to turn ideas into functional, engaging web applications.
      </p>
      <div className="d-flex flex-wrap gap-3 mt-3">
            <a href="#" className="btn btn-dark">
              Download Resume
            </a>
            <a href="/contact-us" className="btn btn-outline-dark">
              Contact Me
            </a>
          </div>

      <div className="row mt-4 g-3">
        <div className="col-sm-6">
          <div className="card p-3 h-100">
            <h4>Modern Work</h4>
            <p>
              I create clean, responsive, and interactive web apps using React, JavaScript, HTML, and CSS—bringing designs to life with modern tools and techniques.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card p-3 h-100">
            <h4>Smart Work</h4>
            <p>
              I write efficient, maintainable code that solves real problems, delivering web experiences that are both visually appealing and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
<div className="container my-5 shadow">
  <div className="row g-4 text-center">

    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm p-4 ">
        <h3>Experience</h3>
        <p>Experiance of more than 1 year in Frentend Devloper </p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm p-4">
        <h3>Education</h3>
        <p>B.tech(Data Science) from IPS Academy, Indore (M.P)</p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm p-4">
        <h3>Address</h3>
        <p>Pune, Maharastra</p>
      </div>
    </div>
  </div>
</div>

</div>

  )
}

export default AboutMe
