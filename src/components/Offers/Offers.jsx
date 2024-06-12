import React from 'react'
import './offers.css'
import offersImg from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>for you</h1>
            <p>PREMIUM DEALS TAILORS THE BEST</p>
            <button className='dropdown-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#111111"><path d="M226-425q-47-61-71.5-133T130-707q0-32 4-64t12-64l-74 73-28-28 126-126 126 126-28 28-78-77q-8 32-14 65t-6 67q0 69 21.5 133.5T255-454l-29 29Zm420 299q-20 8-42 7t-42-11L295-254l7-26q5-19 19-31t34-14l99-8-117-320q-5-12 .5-22.5T355-691q12-5 23 .5t16 17.5l144 394-128 12 178 83q9 4 19 4t19-3l159-58q39-14 56.5-51.5T845-369l-62-169q-5-12 .5-23t17.5-16q12-5 23 .5t16 17.5l61 169q23 63-4.5 122.5T806-185l-160 59Zm-83-279-58-160q-5-12 .5-22.5T523-603q12-5 22.5.5T561-585l58 160-56 20Zm118-43-44-122q-5-12 .5-23t17.5-16q12-5 22.5.5T693-591l45 123-57 20Zm-4 104Z"/></svg>
                Check Now
            </button>
        </div>
    
        <div>
            <img src={offersImg} alt="" className='offers-img'/>
        </div>
    </div>
)
}
