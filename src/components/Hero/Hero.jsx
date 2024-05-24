import React from 'react'
import './hero.css'
import honeyImg2 from '../Assets/honeyImg2.png'
import arrowImg from '../Assets/arrow.png'

export const Hero = () => {
  return (
    <section id='hero-container'> 
      <div>
        <p>A wardrobe essential that's  as sweet as honey</p>
        <hr />
        <h1>Refresh your wardrobe   <br /> with  the  latest trends  <br /> off the runaway</h1>
        <button>Latest Collection
          <img src={arrowImg} alt="" />
        </button>
      </div>
      <img  src={honeyImg2} alt="honey image" className='honeyImg2'/>
    </section>
  )
}
