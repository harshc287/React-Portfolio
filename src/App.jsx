import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactPage";
import ProjectList from "./Pages/ProjectList";
import Footer from './Components/Footer/Footer';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="/project" element={<ProjectList />} />
            <Route path="/projects" element={<ProjectList />} />
            {/* Redirect any unknown route to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;