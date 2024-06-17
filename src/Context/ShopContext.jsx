import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product';
export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};  // cart initial array

    for(let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
  
    // add item.id to cartItems
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        console.log(cartItems)
    }

    // subtract item.id to cartItems
    const minusFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    
    // clears all item.id in cartItems
    const removeAllCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 0}));
        console.log(cartItems)
    }

    // computes total amount in cart
    const getTotalCartAmount = () => {
        let totalAmount = 0; 
        for(const item in cartItems)
            {
                if(cartItems[item] > 0){
                    let itemInfo = all_product.find((product) => product.id === Number(item))
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
            return totalAmount;
    }

    // computes number of cart items
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_product, cartItems, addToCart, getTotalCartAmount, getTotalCartItems, minusFromCart, removeAllCart};



    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;