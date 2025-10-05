import React from 'react'
import aboutMeImg from "../../src/assets/aboutMe.avif"

function AboutMe() {
  return (
    <div className="container">
      <div className='row'>
    <div className=' col-6 col-md-12'>
      <img src={aboutMeImg} alt="" className=' w-50'/>
    </div>
    <div className='col-6 col-md-12'>
    <h3>-ABOUT ME</h3>
    </div>
    </div>
    </div>
  )
}

export default AboutMe
