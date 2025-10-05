import React from 'react'

function ContactMe() {
  return (
    <div className="container text-center mb-3 mt-3">
      <div className='w-50 mx-auto'>
        <h5>-CONTACT</h5>
        <h1>Let's <span className=' text-info fw-bolder'>Work Together</span></h1>
        <p className='p-2'>I take my time, I don’t force thing, I just feel & absorb emotions that are floating around. I capture moments as they come.</p>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Joe Doe"
              />
              <label htmlFor="floatingName">Enter Name</label>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingEmail">Email Address</label>
            </div>
          </div>
        </div>

        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "200px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <div className=' my-3'>
          <button
            className="btn w-100 p-2 fw-bold text-white"
            style={{
              backgroundColor: "#1f603c",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#218c58")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1f603c")}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>

  )
}

export default ContactMe
