import React from 'react';
import { Link } from 'react-router-dom';

import kickbackslugImg from '../images/kickbackslug-256.png';
import solentuniImg from '../images/solentuni-256.png';
import chesspictureImg from '../images/chesspicture-256.png';
import BondPicture from '../images/BondPicture-256.png';

function Blog() {
  return (
    <div>
      <h2 style={{fontSize: "90px"}}>Projects</h2>
      <div>
        <Link to='/KickBackSlug'><a href="/">
          <h2>KickBack Slug</h2>
          <img className='ProjectsCard' src={kickbackslugImg} alt="banner-img"></img>
        </a></Link>
      </div>

      <div>
        <Link to='/UniversityWork'><a href="/">
          <h2>University Work</h2>
          <img className='ProjectsCard' src={solentuniImg} alt="banner-img"></img>
        </a></Link>
      </div>

      <div>
        <Link to='/WarChess'><a href="/">
          <h2>War Chess</h2>
          <img className='ProjectsCard' src={chesspictureImg} alt="banner-img"></img>
        </a></Link>
      </div>

      <div>
        <Link to='/BondRemake'><a href="/">
          <h2>Casino Royale 3D Sketch</h2>
          <img className='ProjectsCard' src={BondPicture} alt="banner-img"></img>
        </a></Link>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Blog