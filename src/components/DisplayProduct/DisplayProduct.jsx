import React from 'react'
import './displayProduct.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import heart_icon from '../Assets/heart_icon.png'
import shipping_icon from '../Assets/shipping_icon.png'
import refund_icon from '../Assets/refund_icon.png'

export const DisplayProduct = (props) => {
    const {product} = props;
  return (
    <div className='display-product'>
      <div className='display-product-left'>
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>

        <div className='display-product-right'>
            <h1 className='product-name'>{product.name}</h1>
            <div className='product-star-container'>
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
              {/* <p className='product-available-qty'>(969)</p> */}
            </div>

            <div className='product-price'>
              <h3 className='product-price-new'>₱{product.new_price}</h3>
              <p className='product-price-old'>₱{product.old_price}</p>
            </div>

            <p className='product-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt quas ab laudantium voluptas reprehenderit, alias sapiente asperiores ipsam animi laboriosam provident fugiat nisi, tempora nam quia corporis tempore totam!
            </p>

            <div className='product-sizes'>
              <div className='sizes-text'>
                <h2>Select Size</h2>
                <div className='size-guide'>Size Guide</div>
              </div>
              <hr />
              <div className='sizes-container'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
              </div>
            </div>

            <div className='add-to-container'>
              <button className='product-add-to-bag-btn'>Add to Bag</button>
              <div className='heart-div'>
                <img className='heart-icon' src={heart_icon} alt="" />
              </div>
            </div>

            <hr />

            <div className='product-shipping-container'> 
              <div className='product-shipping-info'>
                <img src={shipping_icon} alt="" />
                <div>We provide nationwide shipping services covering all regions across the Philippines.</div>
              </div>

              <div className='return-refund'>
                <img src={refund_icon} alt="" />
                <div>Our easy return and refund policy ensures a hassle-free experience for customers, guaranteeing a straightforward process if you're not entirely satisfied with your order.</div>
              </div>
            </div>
        </div>


    </div>
  )
}
