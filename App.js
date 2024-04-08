import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Route
import Home from './components/Home.js';
import Skills from './components/skills/Skills.js';
import Experiences from './components/experiences/Experiences.js';
import Educations from './components/educations/Educations.js';
import Portfolios from './components/portfolios/Portfolios.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap all Route components inside Routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/educations" element={<Educations />} />
        <Route path="/portfolios" element={<Portfolios />} />
      </Routes>
    </Router>
  );
}
export default App;
/*import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Skills from './components/skills/Skills.js';
import Experiences from './components/experiences/Experiences.js';
import Educations from './components/educations/Educations.js';
import Portfolios from './components/portfolios/Portfolios.js';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Routes>
          <Route path="/skills" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/educations" component={Educations} />
          <Route path="/portfolios" component={Portfolios} />
        </Routes>
      </>
    </Router>
  );
}

export default App; */
