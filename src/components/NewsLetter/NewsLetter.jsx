import React from 'react'
import './newsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Stay in the Loop!</h1>
        <p>Subscribe to our newsletter for the latest fashion trends and special deals</p>
  
        <div>
            <input type="email" placeholder='Enter Email :)' />
            <button>Subscribe!</button>
        </div>
    </div>
  )
}
