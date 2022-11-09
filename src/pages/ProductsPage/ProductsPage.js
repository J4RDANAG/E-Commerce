import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import productCardCart from "../../assets/Icons/ShoppingCart.svg";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import "./ProductsPage.scss";
import CartContext from "../../context/cart/CartContext";
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import { MobileNav } from "../../components/MobileNav/MobileNav";
import MobileCart from '../../components/MobileCart/MobileCart'
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductsPage() {
  const { addToCart, cartItems } = useContext(CartContext);
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

  cartItems.find((product)=>{
   
  })

  console.log(cartItems)
  console.log(cartItems[0])

  return (
    <>
      <NavBar />
      <ShoppingCart/>

      
      <div className="products">

        {productData?.map((product) => ( 
         <ProductCard product={product} key={product.id}/> 
        ))}
      </div>
      <div className='mobileNav'>
        <MobileNav/>
        <MobileCart/>
      </div>
    </>
  );
}
