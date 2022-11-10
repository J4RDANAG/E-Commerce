import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import MobileCart from "../../assets/Icons/MobileCart.svg";
import CartContext from "../../context/cart/CartContext";
import stackedLogo from "../../assets/logos/f_ckingSick_s.png";
import logoGif from "../../assets/logos/croppedlogo.gif";

export default function NavBar() {
  const { cartItems, showHideCart } = useContext(CartContext);

  const [navBarOpen, setNavBarOpen] = useState(false);
  const handleToggle = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__link">
            <div className="nav__header-container">
              <img src={stackedLogo} className="nav__logo" />
            </div>
          </Link>
          <Link to="/about" className="nav__link">
            <p>ABOUT</p>
          </Link>
          <Link to="/products" className="nav__link">
            <p>SHOP</p>
          </Link>
        </div>
        <button className="nav__link--cart" onClick={showHideCart}>
          <img src={MobileCart} />

          {cartItems.length > 0 && (
            <div className="nav__cart-items">
              <p className="nav__cart-count">{cartItems.length}</p>
            </div>
          )}
        </button>
      </nav>
      <nav className="mobile-nav">
        <div className="mobile-nav__top">
          <div>
            <img src={logoGif} />
          </div>
        </div>
      </nav>
    </>
  );
}
