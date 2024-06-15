import React from 'react'
import all_product from '../components/Assets/all_product'
import { Item } from '../components/Item/Item'
import './CSS/latestCollection.css'
import { Pagination } from '../components/Pagination/Pagination'


export const LatestCollection = (props) => {
  const itemCount = all_product.length;

  return (
    <div id='latest-collection'>
      <img src={props.banner} alt="" className='latest-banner'/>

      <Pagination itemCount={itemCount}/>
        <div className='latest-collection-container'>
            {all_product.map((item, i) =>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category}/>
            })}
        </div>
    </div>
  )
}
