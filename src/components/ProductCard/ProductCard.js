import React from "react";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { Link } from "react-router-dom";
import productCardCart from "../../assets/Icons/ShoppingCart.svg";
import "./ProductCard.scss";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useContext(CartContext);

  const isInCart = cartItems.some((currentItem) => {
    return currentItem.id === product.id;
  });

  return (
    <div className="products__card" key={product.id}>
      <Link to={`/products/${product.id}`}>
        <div className="products__img-container">
          <img className="products__img" src={product.imgs[0]}></img>
        </div>
      </Link>
      <div className="products__details">
        <div className="products__title-container">
          <h2 className="products__details-title">{product.Title}</h2>
        </div>
        <div className="products__bottom-container">
          <div>
            <p className="products__small-text">{product.Size}</p>
          </div>
          <div className="products__price">
            <p className="products__small-text">{`$${product.Price}`}</p>
          </div>

          {isInCart ? (
            <button className="products--in-cart">
              IN <img src={productCardCart} />
            </button>
          ) : (
            <button
              className="products__cart-cta"
              onClick={() => addToCart(product)}
            >
              + <img src={productCardCart} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
