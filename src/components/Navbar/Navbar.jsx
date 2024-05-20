import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import navLogo from "../Assets/logoImg.png"
import cart from "../Assets/cartImg.png"

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <nav className='navbar'> 
         <div className='nav-logo'>
          {/* <img src={navLogo} alt="" /> */}
          <p>Hanzy Stylez</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu === "shop" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu === "womens" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr/>:<></>}</li>
        </ul>

        <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart} alt="" /></Link>
        </div>
        
    </nav>
  )
}
