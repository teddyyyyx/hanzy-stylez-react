import React from 'react'
import './displayProduct.css'
import heartIcon from '../Assets/heart.png'
import { Dropdowns } from './Dropdowns/Dropdowns'

export const DisplayProduct = (props) => {
    const {product} = props;
    
  return (
    <div className='display-product'>
        <div className='display-images-container'>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className='display-product-right'>
            <h1 className='product-name'>{product.name}</h1>
        
            <div className='product-price'>
              <h3 className='product-price-new'>₱{product.new_price}</h3>
              <p className='product-price-old'>₱{product.old_price}</p>
            </div>

            <p className='product-text-taxes'>All taxes and duties included</p>

            <div className='product-sizes'>
              <div className='size-texts'>
                <p className='select-size'>Select Size:</p>
                <p className='size-guide'>Size Guide</p>
              </div>

                <div className='size-container'>
                  <div>XS</div>
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                  <div>XL</div>
                </div>
            </div>

            <div className='add-to-cart-container'>
                <div className='add-to-cart-text'>ADD TO CART</div>
                <img src={heartIcon} alt="" className='heart-icon'/>
            </div>

              <Dropdowns />
        </div>
    </div>
  )
}
