import React, { useContext } from 'react'
import './CSS/shopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import { Item } from '../components/Item/Item'

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log(all_product);

  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />

      <div className='shop-category-index-sort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div className='shop-category-sort'>
          Sort by <img src={dropdown_icon}/>
        </div>
      </div>

      <div className='shop-category-products'>
        {all_product.map(( item, i ) => {
          if (props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>

      <div className='explore-more-button'>
        <button >Explore More</button>
      </div>
    </div>
  )
}

// export default ShopCategory
