import React from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
import navLogo from "../Assets/logoImg.png"
import cart from "../Assets/cartImg.png"

export const Navbar = () => {
  return (
    <nav className='navbar'> 
         <div className='nav-logo'>
          <img src={navLogo} alt="" />
          <p>Hanzy Stylez</p>
        </div>
        <ul className='nav-menu'>
            {/* <Link activeClass="active" to="" smooth={true} duration={500} spy={true}>Home</Link>
            <Link activeClass="active" to="" smooth={true} duration={500} spy={true}>Men</Link>
            <Link activeClass="active" to="" smooth={true} duration={500} spy={true}>Babe</Link>
            <Link activeClass="active" to="" smooth={true} duration={500} spy={true}>About Us</Link> */}
     
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>

        <div className='nav-login-cart'>
          <button>Login</button>
          <img src={cart} alt="" />
        </div>
        
    </nav>
  )
}
