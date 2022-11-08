// import { useNavigate } from "react-router-dom";
import React from "react";
import './ShoppingCart.scss'
import CartContext from "../../context/cart/CartContext";
import CartItem from "../CartCard/CartCard";
import { useContext } from "react";
export default function ShoppingCart() {
  
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
    {showCart && (
      <div className='cart'>
        <div className="cart__btn-container">
          <button 
            className='cart__close-btn'
            onClick={showHideCart}
          >Close</button>
        </div>
        <div className='cart__item-list'>
          {cartItems.length === 0 ? (
            <h4>Cart is Empty</h4>
          ) : (
            <ul className="cart__item-container">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>
        <div className='cart__total-price'>
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


// export default ShoppingCart