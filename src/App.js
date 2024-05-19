import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './components/Pages/ShopCategory';
import { Product } from './components/Pages/Product';
import { Cart } from './components/Pages/Cart';
import { LoginSignup } from './components/Pages/LoginSignup';
import { Shop } from './components/Pages/Shop';

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/mens' element={<ShopCategory category="mens"/>} />
                <Route path='/womens' element={<ShopCategory category="womens"/>} />
                <Route path='/kids' element={<ShopCategory  category="kids"/>}/>
             
                <Route path="/product" element={<Product/>}>
                    <Route path=":productId" element={<Product />}/>
                </Route>

                <Route path='/cart' element={<Cart />}/>

                <Route path='login' element={<LoginSignup />}/>
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default App;