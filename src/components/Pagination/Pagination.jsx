import React from 'react'
import './pagination.css'

export const Pagination = (props) => {
    
  return (
    <div className='pagination'>
        <div>
          Showing 1 - <br />  {props.itemCount} products
        </div>

        <div className='pagination-sort'>
          Sort
          <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF"> <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" transform="rotate(90 480 -480)"/> </svg>
        </div>
    </div>

  )
}
