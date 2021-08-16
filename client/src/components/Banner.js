import React from 'react'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='Banner'>
      <div className='Banner__left'>
        <h2>Interview Log</h2>
        <p>
          "When people tell me they have learned from experience, I tell them
          the trick is to learn from other people's experience."
        </p>
        <span>-Warren Buffet</span>
      </div>
      <div className='Banner__right'>
        <Link to='/create'>
          <button className='__shareButton'>Share Experience</button>
        </Link>
      </div>
    </div>
  )
}

export default Banner
