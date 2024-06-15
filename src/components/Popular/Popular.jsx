import React, { useRef } from 'react';
import './popular.css';
import data_product from '../Assets/data';
import { Item } from '../Item/Item';
import arrowImg from '../Assets/carousell-arrow.png';

export const Popular = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= 400; // Scroll left button, scrolls the items in the container
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollLeft += 400; // Scroll right button, scrolls the items in the container
  };

  // Mouse wheel function, optional.          onWheel={scrollWheel}
  // const scrollWheel = (evt) => {
  //   evt.preventDefault(); 
  //   scrollContainerRef.current.scrollLeft += evt.deltaY;
  // };

  return (
    <div className='popular'> 
      <h1 className='popular-title'>Women Essentials</h1>
      <hr />

      <div className='popular-item-container'>
        <img src={arrowImg} alt="Left Arrow" className='arrow-left' onClick={scrollLeft} />

        <div className="popular-items" ref={scrollContainerRef}>
          {data_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category}/>;
          })}
        </div>

        <img src={arrowImg} alt="Right Arrow" className='arrow-right' onClick={scrollRight} />
      </div>
    </div>
  );
};
