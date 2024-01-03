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
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>=N={0}</p>
            </div>
            <hr />
            <div className='cartitems-total-items'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-items'>
              <h3>Total</h3>
              <h3>=N={0}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If You Have A Promo Code, Enter It Here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter Your Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems