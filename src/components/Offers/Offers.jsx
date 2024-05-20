import React from 'react'
import './offers.css'
import offersImg from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY THE BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
    
        <div className="offers-right">
            <img src={offersImg} alt="" />
        </div>
    </div>
)
}
