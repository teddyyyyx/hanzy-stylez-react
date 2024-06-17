import React from 'react'
import './intro.css'
import { Link } from 'react-router-dom'
import honeyImg from '../Assets/honeyImg.png'
export const Intro = () => {
  return (
    <section id='intro'> 

      <div className='intro-container'>
        <p className='intro-p'>A wardrobe essential that's  as sweet as honey</p>
        <hr className='intro-hr-1'/>
        <hr className='intro-hr-2'/>
        <h1 className='intro-quote'>Refresh your wardrobe <br /> with  the  latest trends  <br /> off the runaway</h1>
        
        <Link className='intro-button' to='/latest' end>
              <p>Latest Collection</p>
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#111111"><path d="m702-301-43-42 106-106H120v-60h646L660-615l42-42 178 178-178 178Z"/></svg>
        </Link>

      </div>
      <img  src={honeyImg} alt="" className='honeyImg'/>
    </section>
  )
}
