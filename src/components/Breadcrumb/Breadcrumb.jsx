import React from 'react'
import { Link } from 'react-router-dom';

export const Breadcrumb = (props) => {
    const { product } = props;

  return (
    <div className='breadcrumb'>
           <Link to='/'>Shop</Link> 
         / <Link to={`/${product.category}`}>{product.category}</Link>
        / {product.name}
    </div>
  )
}
