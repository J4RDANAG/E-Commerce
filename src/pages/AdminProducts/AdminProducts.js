import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminAside from "../../components/AdminAside/AdminAside";
import "./AdminProducts.scss";
import EditIcon from "../../assets/Icons/EditIcon.svg";
import DeleteIcon from "../../assets/Icons/DeleteIcon.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function AdminProducts() {
  const [data, setData] = useState([]);

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
        
        setData(list);
       
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
console.log(data)
  return (
    // <>
      <div className="position-aside">
        <AdminAside />
        <div className="admin-products">
          <div className="admin-products__header">
            <h3>Title</h3>
            <h3>Price</h3>
            <h3>Availability</h3>
            <h3>Date Posted</h3>
            <h3>Actions</h3>
          </div>

          {data?.map((product) => (
            <div className="admin-products__list" key={product.id}>
            <div className="admin-products__card" >
              <h4>{product.Title}</h4>
              <h4>{product.Price}</h4>
              <h4>In Stock</h4>
              <h4>{product.timestamp}</h4>
              <div className="admin-products__btns">
                <div className="admin-products__icons">
                  <img src={EditIcon} />
                  <img src={DeleteIcon} />
                </div>
              </div>
            </div>
          </div>

        ))}
          
</div>
  </div>
    // </>
  );
}
