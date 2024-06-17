import React, { useContext } from 'react'
import './CSS/shopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { Item } from '../components/Item/Item'
import { Pagination } from '../components/Pagination/Pagination'

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(item => item.category === props.category);  //Filter category for Pagination uses
  const itemCount = filteredProducts.length;   // sent as props for Pagination component

  return (
    <div className='shop-category'>
        <img className='shop-category-banner' src={props.banner} alt="" />
        
        <Pagination itemCount={itemCount}/> 

      <div className='shop-category-products'>
        {all_product.map(( item, i ) => {
          if (props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category}/>
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