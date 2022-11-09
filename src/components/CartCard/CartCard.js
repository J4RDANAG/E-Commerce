import { useContext } from "react";
import "./CartCard.scss";
import CartContext from "../../context/cart/CartContext";
import productDelete from '../../assets/Icons/deleteProduct.svg'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    // <div className="cartItem__container">
    <li className='cartItem'>
      <img src={item.imgs[0]} alt={item.Title} className='cartItem__img'/>
      <div>
      <p> {item.Title} {`$${item.Price}`}</p>
      </div>
      <button className='cartItem__btn' onClick={() => removeItem(item.id)}>
        <img src={productDelete}/>
      </button>
    </li>
    // </div>
  );
};

export default CartItem;