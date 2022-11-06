import React from "react";
import './MobileCart.scss'
import CartContext from "../../context/cart/CartContext";
import CartItem from "../CartCard/CartCard";
import { useContext } from "react";

export default function MobileCart() {
  
  const { mobileShowCart, cartItems, mobileShowHideCart } = useContext(CartContext);
  return (
    <>
    {mobileShowCart && (
      <div className='mobile-cart'>
        <div className="mobile-cart__btn-container">
          <button 
            className='mobile-cart__close-btn'
            onClick={mobileShowHideCart}
          >Close</button>
        </div>
        <div className='mobile-cart__item-list'>
          {cartItems.length === 0 ? (
            <h4>Cart is Empty</h4>
          ) : (
            <ul className="mobile-cart__item-container">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>
        <div className='mobile-cart__total-price'>
          <div>Cart Total</div>
          <div >
            $
            {cartItems.reduce((amount, item) => item.Price + amount, 0)}
          </div>
        </div>
      </div>
    )}
  </>
);
};