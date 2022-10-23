import React from 'react'
import { Link } from 'react-router-dom';


import kickbackslugImg from '../../images/kickbackslug-256.png';


const KickBackSlug = () => {
  return (
    <div className='skills'>

      <h2>KickBack Slug: Cosmic Courier</h2>

      <img className='ProjectsCard' src={kickbackslugImg} alt="banner-img"></img>

      <div class="skill-row">
        <p>
          KickBack Slug is a video game project that I started work on in January 2021 at Kittens In Timespace.
          My role at Kittens in Timespace is a part time/ freelance games programmer and game designer.
          The game Kickback slug is a 2d side scrolling type of game in where the character a slug uses three different guns to propel their self around the level.
        </p>
        <p>
          Working on this game for Kittens in Timespace has also got me used to what it's like to work for a professional games company, a lot of the staff are European which means the office is technically ran on Discord which does mean it has moved with the timea as a lot of people now work from home.
          The ability to work from anywhere in the world and all I need is my laptop has been fantastic and truly revolutionary which I thank Kittens in Timespace for, they have been very patient with me In trying new ways of working such as laptops/ desktops and working while traveling and they have taught me so many industry standard practices that I feel confident to work and communicate with anyone in the computer industry.
          Ive seen the development of Kickback slug since the prototype stage and although I’ve developed and self-published video games by myself before working as a team and publishing to platforms such as PlayStation, Xbox, Nintendo and Steam has been a very proud moment for myself to be a part of.
        </p>
        <p>
          Check out the links below for the Steam page of the game and the twitter of Kittens In Timespace, they have more projects ongoing which hopefully I will be a part of.
        </p>
        <p className='ToBeUpdatedBlog'>
          I will update this page when there is more content to share.
        </p>
      </div>
      <a href='https://store.steampowered.com/app/1814250/Kickback_Slug_Cosmic_Courier/' target="-blank">KickBack Slug: Cosmic Courier</a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a href='https://twitter.com/KitsInTimespace' target="-blank">Kittens In Timespace</a>
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

export default KickBackSlug
