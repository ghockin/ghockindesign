import './App.css';
import React from 'react';
import Header from './partials/Header.js';
import Footer from './partials/Footer.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import KickBackSlug from './pages/projects/KickBackSlug.js';
import UniversityWork from './pages/projects/UniversityWork';
import WarChess from './pages/projects/WarChess';
import BondRemake from './pages/projects/BondRemake.js';
import DataScience from './pages/uni-projects/DataScience.js';
import UxStrategy from './pages/uni-projects/UxStrategy.js';
import WebTechnology from './pages/uni-projects/WebTechnology.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/kickbackslug" element={<KickBackSlug></KickBackSlug>}></Route>
          <Route path="/UniversityWork" element={<UniversityWork></UniversityWork>}></Route>
          <Route path="/WarChess" element={<WarChess></WarChess>}></Route>
          <Route path="/BondRemake" element={<BondRemake></BondRemake>}></Route>
          <Route path="/DataScience" element={<DataScience></DataScience>}></Route>
          <Route path="/UxStrategy" element={<UxStrategy></UxStrategy>}></Route>
          <Route path="/WebTechnology" element={<WebTechnology></WebTechnology>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
