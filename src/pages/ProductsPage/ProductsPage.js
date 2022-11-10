import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import "./ProductsPage.scss";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { MobileNav } from "../../components/MobileNav/MobileNav";
import MobileCart from "../../components/MobileCart/MobileCart";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductsPage() {
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
      <ShoppingCart />

      <div className="products">
        {productData?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="mobileNav">
        <MobileNav />
        <MobileCart />
      </div>
    </>
  );
}
