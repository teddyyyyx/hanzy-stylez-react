import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
import { Footer } from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { NewsLetter } from './components/NewsLetter/NewsLetter';

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids" />} />
        <Route path='/:category/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>


        {/*Render the NewsLetter component only if the current URL path is not /login. */}
      {location.pathname !== '/login' && <NewsLetter />}   
      <Footer />            
    </>
  );
};

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </div>
  );
};

export default App;
