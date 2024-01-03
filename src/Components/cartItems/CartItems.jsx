import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  // we access data and function using Context API from ShopContext using following code 
const {all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className="cartItem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/*   <div>
        <div className="cartitems-format">
          <img src="" alt="" className='carticon-product-icon' />
          <p></p>
          <p></p>
          <button className='cartitems-quantity'></button>
          <p></p>
          <img src={remove_icon} onClick={()=>{removeFromCart()}} alt="" />
        </div>
        <hr />
      </div> */}
    {all_product.map((e)=>{
      if(cartItems[e.id]>0)
      {
        return <div>
        <div className="cartitems-format cartItem-format-main">
          <img src={e.image} alt="" className='carticon-product-icon' />
          <p>{e.name}</p>
          <p>=N={e.new_price}</p>
          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
          <p>=N={e.new_price*cartItems[e.id]}</p>
          <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
      </div>
      }
      return null;
    })}

    </div>
  )
}

export default CartItems