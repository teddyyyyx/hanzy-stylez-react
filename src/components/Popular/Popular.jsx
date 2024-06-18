import React, { useRef } from 'react';
import './popular.css';
import data_product from '../Assets/data';
import { Item } from '../Item/Item';

export const Popular = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= 400; // Scroll left button, scrolls the items in the container
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollLeft += 400; // Scroll right button, scrolls the items in the container
  };

  return (
    <div className='popular'> 
      <h1 className='title'>Women Essentials</h1>

      <div className='popular-item-container'>
      <svg className='arrow-icon-svg' onClick={scrollLeft} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>        <div className="popular-items" ref={scrollContainerRef}>
          {data_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category}/>;
          })}
        </div>

        <svg className='arrow-icon-svg' onClick={scrollRight} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
      </div>
    </div>
  );
};
