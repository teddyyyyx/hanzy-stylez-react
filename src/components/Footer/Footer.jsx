import React, {useEffect} from 'react'
import './footer.css'
import { NavLink, useLocation } from 'react-router-dom'
// import { NewsLetter } from '../NewsLetter/NewsLetter'


export const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className='footer'>
      {/* <h1 className='footer-title'>Hanzy Styles</h1> */}
 
      <div className='footer-ul-container'>
        <div className="footer-menu">
          <h1>Main</h1>
          <ul className='footer-ul'>
            <li><NavLink to='/' end>Shop</NavLink></li>
            <li><NavLink to='/men' end>Men</NavLink></li>
            <li><NavLink to='/women' end>Women</NavLink></li>
            <li><NavLink to='/kids' end>Kids</NavLink></li>
          </ul>          
        </div>

        <div className="footer-menu">
          <h1>Pages</h1>
          <ul className='footer-ul'>
            <li><NavLink to='/latest' end>Latest Collection</NavLink></li>
            <li><NavLink to='/#' end>Eclusives</NavLink></li>
            <li><NavLink to='/#' end>New Collection</NavLink></li>
            <li><NavLink to='/#' end>Sale</NavLink></li>
          </ul>          
        </div>

        <div className="footer-menu">
          <h1>Customer Service</h1>
          <ul className='footer-ul'>
            <li><NavLink to='/#' end>Contact Us</NavLink></li>
            <li><NavLink to='/#' end>Exchange & Return</NavLink></li>
            <li><NavLink to='/#' end>Size Guide</NavLink></li>
            <li><NavLink to='/#' end>FAQ</NavLink></li>
          </ul>          
        </div> 

        <div className="footer-menu menu-hide">
          <h1>About Us</h1>
          <ul className='footer-ul'>
            <li><NavLink to='/#' end>Story</NavLink></li>
            <li><NavLink to='/#' end>Thread by Hanzy</NavLink></li>
            <li><NavLink to='/#' end>Terms & Conditions</NavLink></li>
          </ul>          
        </div>

      </div>
    

      <div className='news-letter'>
        <h1>Stay in the Loop!</h1>
        <p>Subscribe to our newsletter for the latest fashion trends and special deals</p>
  

        <div className='news-letter-email-container'>
            <input type="email" placeholder='Enter Email :)' />
            <button>Subscribe!</button>
        </div>
        
        <hr className='footer-hr'/>
      </div>

    </div>
)
}
