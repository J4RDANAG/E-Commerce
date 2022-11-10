import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { MobileNav } from "../../components/MobileNav/MobileNav";
import "./HomePage.scss";
import MobileCart from "../../components/MobileCart/MobileCart";
import poster from "../../assets/logos/croppedPoster.png";
import { Link } from "react-router-dom";

export default function HomePage({}) {
  return (
    <div>
      <NavBar />
      <ShoppingCart />
      <div className="homepage">
        <img src={poster} className="homepage__poster" />

        <Link to="/products" className="homepage__cta-container">
          <button className="homepage__cta">SHOP OUR CURATED SELECTION</button>
        </Link>
      </div>

      <div className="mobileNav">
        <MobileNav />
        <MobileCart />
      </div>
    </div>
  );
}
