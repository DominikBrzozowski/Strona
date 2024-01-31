// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import './App.css'; // Zaimportowanie pliku ze stylami CSS

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1 className="header">Astronomiczna</h1>

        <nav className="navigation">
          <ul>
            <li><Link to="/" className="nav-link">STRONA GŁÓWNA</Link></li>
            <li><Link to="/about" className="nav-link">O MNIE</Link></li>
            <li><Link to="/projects" className="nav-link">PROJEKT</Link></li>
            <li><Link to="/contact" className="nav-link">KONTAKT</Link></li>
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project-details" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



