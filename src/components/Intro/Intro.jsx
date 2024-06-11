import React from 'react'
import './intro.css'
import honeyImg2 from '../Assets/honeyImg2.png'
import arrowImg from '../Assets/arrow.png'

export const Intro = () => {
  return (
    <section id='intro'> 
      <div className='intro-container'>
        <p className='intro-p'>A wardrobe essential that's  as sweet as honey</p>
        <hr />
        <hr className='intro-hr'/>
        <h1 className='intro-quote'>Refresh your wardrobe <br /> with  the  latest trends  <br /> off the runaway</h1>
        <button className='intro-button'>Latest Collection
          <img src={arrowImg} alt="" />
        </button>
      </div>
      <img  src={honeyImg2} alt="" className='honeyImg2'/>
    </section>
  )
}
