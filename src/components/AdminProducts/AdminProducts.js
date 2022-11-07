import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminAside from "../AdminAside/AdminAside";
import "./AdminProducts.scss";
import EditIcon from "../../assets/Icons/EditIcon.svg";
import DeleteIcon from "../../assets/Icons/DeleteIcon.svg";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
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

  const handleDelete = async (id) => {
    try{
      await deleteDoc(doc(db, 'Products', id))
      setData(data.filter((item) => item.id !== id));
    }catch(err){
      console.log('did not delete')
    }
    
  };
// console.log(data)
  return (
    // <>
      <div className="position-aside">
        <AdminAside />
        <div className="admin-products">
          <div className="admin-products__header">
            <h3>Title</h3>
            <h3>Price</h3>
            <h3>size</h3>
            <h3>Actions</h3>
          </div>
          <div className="admin-products__list" >
          {data?.map((product) => (
           
            <div className="admin-products__card" key={product.id}>
              <div className="admin-products__details">
              <h4>{product.Title}</h4>
              </div>
              <div className="admin-products__details">
              <h4>{product.Price}</h4>
              </div>
              <div className="admin-products__details">
              <h4>{product.Size}</h4>
              </div>
              <div className="admin-products__btns">
                <div className="admin-products__icons">
                  <Link to={`/admin/${product.id}/edit`}> 
                  <img src={EditIcon} />
                  </Link>
                  
                  <div onClick={() => handleDelete(product.id)}>
                  <img src={DeleteIcon} />
                    </div>
                  
                </div>
              </div>
            </div>
          

        ))}
          </div>
</div>
  </div>
    // </>
  );
}
