import React, {useContext, useState} from 'react'
import './displayProduct.css'
import { Dropdowns } from './Dropdowns/Dropdowns'
import { ShopContext } from '../../Context/ShopContext'
  
export const DisplayProduct = (props) => {
const {product} = props;
const {addToCart} = useContext(ShopContext);
const [showSpan, setShowSpan] = useState(false);

  const handleClick = () => {
    addToCart(product.id)
    setShowSpan(true);

    setTimeout(() => {
      setShowSpan(false);
    }, 800);
  }

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
                <button onClick={handleClick} className='add-to-cart-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
                    ADD <span className={showSpan ? '' : 'hide-span'}>ED&nbsp; </span>TO CART <span className={showSpan ? '' : 'hide-span'}>!</span>
                </button>

                <svg className='heart-icon' xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#774697"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            </div>

              <Dropdowns />
        </div>
    </div>
    )
}
