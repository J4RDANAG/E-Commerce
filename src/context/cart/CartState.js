import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, GET_CART_ITEMS, MOBILE_SHOW_HIDE_CART } from "../Types";



const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    mobileShowCart: false,
    cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
    
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getCartItems = () => {
    if (localStorage.hasOwnProperty("cartItems")) {
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
      console.log(storedCartItems)
      dispatch({ type: GET_CART_ITEMS, payload: storedCartItems });
  }}

  const addToCart = (cartItem) => {
    const prevCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (prevCartItems === null) {
      const NewCartItems = [cartItem];
      localStorage.setItem("cartItems", JSON.stringify(NewCartItems));
    } else {
      const newCartItems = [cartItem, ...prevCartItems];
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
    dispatch({ type: ADD_TO_CART, payload: cartItem });
  };
  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };
  const mobileShowHideCart = () => {
    dispatch({ type: MOBILE_SHOW_HIDE_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
    const prevCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const newCartItems = prevCartItems.filter((cartItem) => cartItem.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        mobileShowCart: state.mobileShowCart,
        cartItems: state.cartItems,
        getCartItems,
        addToCart,
        showHideCart,
        removeItem,
        mobileShowHideCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartState;
