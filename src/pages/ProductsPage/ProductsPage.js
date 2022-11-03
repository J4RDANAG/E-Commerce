import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import productCardCart from "../../assets/Icons/MobileCart.svg";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import "./ProductsPage.scss";

export default function ProductsPage() {
  const [productData, setProductData] = useState ();
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Products"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id,  ...doc.data()});
        //   console.log(doc.id, "=>", doc.data());
        // console.log(list)
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
      <div className="products">
        <div className="products__card">
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
              <div className="products__cart-cta">
                Add to
                <img src={productCardCart} />
              </div>
            </div>
          </div>
        </div>
        {productData?.map((product) => (
 <div className="products__card">
          <div className="products__img-container">
            <img className="products__img" src={product.imgs[1]}></img>
          </div>
          <div className="products__details">
            <div className="products__details-small">
              <p>{product.Brand}</p> <p>{product.Size}</p>
            </div>
            <div className="products__details-title">
            {product.Title}
            </div>
            <div className="products__bottom-container">
              <div className="products__price">{product.Price}</div>
              <div className="products__cart-cta">
                Add to
                <img src={productCardCart} />
              </div>
            </div>
          </div>
        </div> 
        ))}

      </div>
    </>
  );
}
