import React from 'react';
import { Link } from 'react-router-dom';


import BondPicture from '../../images/BondPicture-256.png';

const BondRemake = () => {
  return (
    <div className='skills'>

      <h2>Casino Royale Remake</h2>

      <img className='ProjectsCard' src={BondPicture} alt="banner-img"></img>

      <div class="skill-row">
        <p>
          The Casino Royale Project is a personal project for me as its one of my favorite films of all time.
          I'm a big fan of the James Bond series and in 2021 I decided to re learn 3d modelling, animation and visual effects skills and try to remake the famous James Bond Gunbarrel sequence.
          I decided to do it in a low poly character format, although it came out okay for me, I felt I could do better. The main problems in the previous sequence were that the clothes were no existent and the animation felt too robotic.
          I decided to render it within Unity due to the fact game engines render faster than 3d modelling software and my skills are more experienced in Unity than Blender for rendering.
        </p>
        <p>
          The scene I will be recreating is the first fight sequence in Casino Royale. The fight sequence is in black and white with a high grain filter which I can achieve within post processing. Since it's all in black, white this means no unwrap and texturing stage.
        </p>
        <p>
          Below is the sequence I aim to create from 2:54- 3:00.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/I4fTKmbtu8E?start=174" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='ToBeUpdatedBlog'>
          I will update this page when there is more content to share.
        </p>
      </div>
      <div class="skill-row">
        <div className='BackToBlog'>
          <Link to="/blog"><a class="btn" href="/blog">Back To Blog</a></Link>
        </div>
      </div>
    </div>
  )
}

export default BondRemake