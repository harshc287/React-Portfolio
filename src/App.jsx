import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import AboutMe from "./Pages/AboutMe"
import ContactMe from "./Pages/ContactMe"
import ProjectList from "./Pages/ProjectList"
import Footer from './Components/Footer/Footer'
import '@fortawesome/react-fontawesome'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/contact-me' element={<ContactMe/>}/>
        <Route path='/project' element={<ProjectList/>}/>
      </Routes>
      <AboutMe/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
