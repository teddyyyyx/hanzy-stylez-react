import React from 'react'
import './newCollections.css'
import new_collections from '../Assets/new_collections'
import { Item } from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1 className='new-collections-title'>NEW COLLECTIONS</h1>
        <hr />

        <div className='collections-container'>
            {new_collections.map((item, i) =>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category}/>
            })}
        </div>
    </div>
  )
}
