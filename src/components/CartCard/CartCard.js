import { useContext } from "react";
import "./CartCard.scss";
import CartContext from "../../context/cart/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <li className='CartItem__item'>
      <img src={item.imgs[0]} alt={item.Title} />
      <div>
        {item.Title} {`$${item.Price}`}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;