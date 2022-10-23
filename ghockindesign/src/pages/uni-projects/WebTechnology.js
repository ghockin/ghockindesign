import React from 'react';
import { Link } from 'react-router-dom';

const WebTechnology = () => {
  return (
    <div className='skills'>

      <h2>WebTechnology</h2>

      <div class="skill-row">
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

export default WebTechnology