import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import ShopContextProvider from './Context/ShopContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
);

