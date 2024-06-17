import React, { useRef, useState, useEffect, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './navbar.css'
import navArrow from '../Assets/nav-arrow.png'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);  // function that computes cart item value

  useEffect(() => {
    // Determine the active menu based on the current pathname
    const path = location.pathname;
    if (path === '/') {
      setMenu('shop');
    } else if (path.startsWith('/men')) {
      setMenu('men');
    } else if (path.startsWith('/women')) {
      setMenu('women');
    } else if (path.startsWith('/kids')) {
      setMenu('kids');
    } else {
      setMenu('');
    }
  }, [location.pathname]);

// dropdown in smaller viewports
const dropdown_toggle = (e) => {
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle('open');
}


  return (
    <nav className='navbar'> 
        <NavLink to='/' end className='nav-logo-link'><h1 className='nav-logo'>Hanzy <br className='nav-br'/> Stylez</h1></NavLink>
        <img src={navArrow} onClick={dropdown_toggle} alt="" className='nav-dropdown' />

        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><NavLink exact='true' to='/' end className={menu === "shop" ? 'active': ''}>Shop</NavLink>   </li>
            <li onClick={()=>{setMenu("men")}}><NavLink exact='true' to='/men' end  className={menu === "men" ? 'active': ''}>Men</NavLink></li>
            <li onClick={()=>{setMenu("women")}}><NavLink exact='true' to='/women' end  className={menu === "women" ? 'active': ''}>Women</NavLink></li>
            <li onClick={()=>{setMenu("kids")}}><NavLink exact='true' to='/kids' end  className={menu === "kids" ? 'active': ''}>Kids</NavLink></li>
            {/* <li onClick={()=>{setMenu("kids")}}><NavLink exact='true' to='/kids' end className={({ isActive }) => isActive ? 'active' : ''}>Kids</NavLink></li> */}
            {/* <li onClick={()=>{setMenu("kids")}}><NavLink exact='true' to='/kids' end className={({ isActive }) => isActive ? 'active' : ''}>Kids</NavLink>{menu === "kids" ? <hr/>:<></>}</li> */}
        </ul>


        <div className='nav-login-cart'>
          <NavLink to='/login' end><button>Login</button></NavLink>
        
          <NavLink to='/cart' end className='nav-cart'>
            <svg className='nav-cart-icon' xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>          
            <p>{getTotalCartItems()}</p>
          </NavLink>
        </div>
    </nav>
  )
}
