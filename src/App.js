import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
import { Footer } from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>} />
                <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>} />
                <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
             
                <Route path="/product" element={<Product/>}>
                    <Route path=":productId" element={<Product />}/>
                </Route>

                <Route path='/cart' element={<Cart />}/>

                <Route path='login' element={<LoginSignup />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
)
}

export default App;