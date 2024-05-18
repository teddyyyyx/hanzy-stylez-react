import React from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
import logo from "../Assets/logoImg.png"

export const Navbar = () => {
  return (
    <nav> 
         <div className='nav-logo'>
          <img src={logo} alt="" />
          <p>Hanzy Stylez</p>
        </div>
        <ul className='navUl'>
            {/* <Link activeClass="active" to="" smooth={true} duration={500} spy={true}>Home</Link>
            <Link activeClass="active" to="" smooth={true} duration={500} spy={true}>Men</Link>
            <Link activeClass="active" to="" smooth={true} duration={500} spy={true}>Babe</Link>
            <Link activeClass="active" to="" smooth={true} duration={500} spy={true}>About Us</Link> */}
     
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li></li>
        </ul>
        
    </nav>
  )
}
