import React from 'react';
import { Link } from 'react-router-dom';


import solentuniImg from '../../images/solentuni-256.png';

const UniversityWork = () => {
  return (
    <div>
      <h2>University Work </h2>

      <img className='ProjectsCard' src={solentuniImg} alt="banner-img"></img>

      <div class="skill-row">
        <p>
          This page is a list of all the university projects I’m doing in my final year.
          This page acts as a journal for me which I can look back on.
          If your more interested in my personal work then go to my projects page.
        </p>
      </div>

      <h2 style={{ fontSize: "90px" }}>Projects</h2>
      <div>
        <Link to='/DataScience'><a href="/">
          <h2>Data Science</h2>
        </a></Link>
      </div>

      <div>
        <Link to='/UxStrategy'><a href="/">
          <h2>Ux Strategy</h2>
        </a></Link>
      </div>

      <div>
        <Link to='/WebTechnology'><a href="/">
          <h2>Web Technology</h2>
        </a></Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div class="skill-row">
        <div className='BackToBlog'>
          <Link to="/blog"><a class="btn" href="/blog">Back To Blog</a></Link>
        </div>
      </div>
    </div>
  )
}

export default UniversityWork