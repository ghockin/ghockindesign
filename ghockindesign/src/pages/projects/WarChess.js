import React from 'react';
import { Link } from 'react-router-dom';


import chesspictureImg from '../../images/chesspicture-256.png';

const WW2Chess = () => {
  return (
    <div>
      <h2>War Chess</h2>

      <img className='ProjectsCard' src={chesspictureImg} alt="banner-img"></img>

      <div class="skill-row">
        <p>
          As of 2022 it's my 9th year in studying games design. I began in 2013 as a 13 year old eager to learn video game design.
          My dream was to remake Call Of Duty Zombies so that me and my friends could all play for free and on the same platform.
          As the years went on I realized game design is a huge challenge to tackle and to get the quality of a lot of triple A games you must accept that It will take along time for you to reach that standard or possibly never especially if you're a developer alone.
          However, as I’m getting older and hopefully wiser, I’ve decided that now is the time to develop my own simple and small video game. I will try to add everything I have learned over the years from my degrees and diplomas and should be able to create something that is special to me which I can use to showcase my skills to future employers.
        </p>
        <p>
          The game I will make will be a chess replica as I believe that creating a replica of something is a good way to start a project.
          Alot of new games companies use the replica method for their first projects which might be why there are a lot of sports games, as all the rules are already set out, and everyone in the team understands clearly what the project should look like.
          I chose chess to replicate as it’s a game I’ve only recently learned and it’s incredibly old and universal. The idea for the game is to make the board into a war zone environment.
          Each piece, depending on its class, will be a certain unit of soldier.
          The game will be set in World War 2, where you can play either the Allies or Axis.
          For example, the pawns would be a group of 4 soldiers, and a knight could be a tank.
          When a player decides to take a player’s piece the units will interact in a cinematic animation sequence.
          Basically, the game is chess but with more visual aesthetic and sound.
        </p>
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

export default WW2Chess
