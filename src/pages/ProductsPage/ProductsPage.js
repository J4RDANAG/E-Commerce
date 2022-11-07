import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import productCardCart from "../../assets/Icons/MobileCart.svg";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import "./ProductsPage.scss";
import CartContext from "../../context/cart/CartContext";
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import { MobileNav } from "../../components/MobileNav/MobileNav";
import MobileCart from '../../components/MobileCart/MobileCart'

export default function ProductsPage() {
  const { addToCart } = useContext(CartContext);
  const [productData, setProductData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Products"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setProductData(list);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <ShoppingCart/>

      
      <div className="products">
        {/* <div className="products__card">
          <div className="products__img">
            <img src="http://placekitten.com/280/300"></img>
          </div>
          <div className="products__details">
            <div className="products__details-small">
              <p>Brand</p> <p>Size</p>
            </div>
            <div className="products__details-title">
              1990's single stitch cat photo
            </div>
            <div className="products__bottom-container">
              <div className="products__price">$49.99</div>
              <button className="products__cart-cta">
                +
                <img src={productCardCart} />
              </button>
            </div> */}
          {/* </div>
        </div> */}
        {productData?.map((product) => (
          
          <div className="products__card" key={product.id}>
            <div className="products__img-container">
              <img className="products__img" src={product.imgs[0]}></img>
            </div>
            <div className="products__details">
              <div className="products__details-small">
                <p>{product.Brand}</p> <p>{product.Size}</p>
              </div>
              <div className="products__details-title">{product.Title}</div>
              <div className="products__bottom-container">
                <div className="products__price">{`$${product.Price}`}</div>
                <button className="products__cart-cta" onClick={() => addToCart(product)}>
                  +
                  <img src={productCardCart} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mobileNav'>
        <MobileNav/>
        <MobileCart/>
      </div>
    </>
  );
}
