import React from 'react'
import userImg from '../../assets/UserImg.png'
import heroImg from '../../assets/HeroBgImg.jpg'

const hero = () => {
  return (
  <div
        className="container-fluid m-0 p-0 position-relative"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        <div className="row align-items-center h-100  p-4">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="display-3">
              Hi ✋ I'm <span className="text-primary fw-bolder">Harsh</span>
            </h1>
            <h3 className="fs-1 fw-bolder">MERN Stack Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium non doloremque debitis! Tenetur qui eos repudiandae.
            </p>
            <button className="btn btn-outline-primary fw-bold me-2">
              Let's Talk
            </button>
            <button className="btn btn-outline-secondary fw-bold">
              Learn More
            </button>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img
              src={userImg}
              alt="user"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
  )
}

export default hero
