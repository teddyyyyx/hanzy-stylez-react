import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './cartItems.css'
import { Link } from 'react-router-dom'

export const CartItems = () => {
  const {all_product, cartItems, getTotalCartAmount, addToCart, minusFromCart, removeAllCart} = useContext(ShopContext); // get functions from ShopContext component using Context API

  return (
    <div className='cart'>
      <div className='cart-left-container'>
          <div className="cart-headers">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Qty</p>
            <p className='cart-hide'>Total</p>
            <p>Remove</p>
          </div>
          <hr className='cart-header-hr'/>

          <div>
              {all_product.map((e)=> {
              if(cartItems[e.id] > 0){
                return <div>
                          <div>
                            <div className='cart-products'>
                              <Link to={`/${e.category}/product/${e.id}`}> <img src={e.image} alt="" className='cart-product-img'/>  </Link>

                              <div className='cart-name-id-container'>
                                <Link className='cart-name' to={`/${e.category}/product/${e.id}`}> {e.name} </Link>
                                <div><span className='product-span'>Product</span> ID: {e.id}</div>
                              </div>
                            
                              <div className='cart-prices'>
                                <p>P{e.new_price}</p>
                                <p>P{e.old_price}</p>
                              </div>

                              <div className='cart-product-qty'>
                                <button onClickCapture={() => {minusFromCart(e.id)}}>-</button>
                                {cartItems[e.id]}
                                <button onClick={() => {addToCart(e.id)}}>+</button>
                              </div>

                              <p className='cart-hide'>P{e.new_price * cartItems[e.id]}</p>
                             

                              <svg className='cart-remove-icon' onClick={()=> {removeAllCart(e.id)}}  xmlns="http://www.w3.org/2000/svg" height="30px" width="30px"viewBox="0 -960 960 960"  fill="#000000"><path d="m634-440-81-80h69l110-200H353l-80-80h525q23 0 35.5 19.5t.5 42.5L692-482q-11 20-28 31t-30 11ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm540 52L566-280H304q-44 0-67-37.5t-3-78.5l42-86-72-162L28-820l56-56L876-84l-56 56ZM486-360l-80-80h-62l-40 80h182Zm136-160h-69 69Zm58 440q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80Z"/></svg>
                            </div>
                          </div>
                              <hr />
                        </div>
              }
              return null;
            })}
          </div>  
      </div>


      <div className="cart-right-container">
        <h1 cart-name>Cart Totals</h1>

        <div>
            <div className="cart-subtotal">
              <p>Subtotal</p>
              <p>P{getTotalCartAmount()}</p>
            </div>
            <hr />
        </div>

        {/* <hr /> */}
        <div>
            <div className="cart-shipping">
              <p>Shipping</p>
              <p>Free</p>
            </div>

            <hr />
        </div>

        <div className="cart-total">
          <h3>Total</h3>
          <h3>P{getTotalCartAmount()}</h3>
        </div>

        <div className="cart-promocode">
          <p>Hanzy Promo</p>
          <div className="cart-input">
            <input type="text" placeholder='Enter Code'/>
          </div>   
        </div>

        <button class="cart-checkout-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
          Checkout
        </button>


      </div>
  </div>
  )
}
