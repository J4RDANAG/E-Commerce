import { useContext } from "react";
import "./CartCard.scss";
import CartContext from "../../context/cart/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    // <div className="cartItem__container">
    <li className='cartItem'>
      <img src={item.imgs[0]} alt={item.Title} className='cartItem__img'/>
      <div>
        {item.Title} {`$${item.Price}`}
      </div>
      <button className='cartItem__btn' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
    // </div>
  );
};

export default CartItem;