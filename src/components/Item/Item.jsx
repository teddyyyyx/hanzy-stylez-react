import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/${props.category}/product/${props.id}`}>  <img src={props.image} alt="" className='item-img'/>  </Link>
      <Link to={`/${props.category}/product/${props.id}`}>  <p className='item-name'>{props.name}</p>  </Link>
      {/* <p className='item-name'>{props.name}</p> */}
        <div className='item-prices'>
            <div className='item-price-new'>
                P{props.new_price}
            </div>
            <div className='item-price-old'>
                {props.old_price}
            </div>
        </div>
    </div>
  )
}
