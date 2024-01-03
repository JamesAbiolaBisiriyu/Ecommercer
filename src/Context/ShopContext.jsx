import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'


export const ShopContext = createContext(null);

// creating a function that will create an empty cart that will be the key values will be quantity of product added in the cart
const getDefaultCart = ()=>{
  let cart = {};
  // let cart = empty object
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props)=> {

  // creating a UseState variable, cartItems is the variable name, setCartItems is the function name, pass the function getDefaultCart
  const [cartItems,setCartItems] = useState(getDefaultCart());



  // creating the ADDTOCART function so we can add the object products into our cart
  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  console.log(cartItems);

  }

  // creating the REMOVECART function so we can remove from the cart
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  
  const contextValue = {all_product,cartItems,addToCart,removeFromCart};

  

  return (
    <ShopContext.Provider value = {contextValue}>
      {props.children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;