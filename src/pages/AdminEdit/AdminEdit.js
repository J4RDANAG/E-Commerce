import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getDoc, doc, setDoc } from 'firebase/firestore'
import { db } from "../../firebase";



export default function AdminEdit() {
    const [userInput, setUserInput] = useState(null)
    const {id} = useParams()

    const fetchData = async () => {
      
        const docRef = doc(db, "Products", id);
        try {
            const docSnap = await getDoc(docRef);
             let data = docSnap.data() 
            //  console.log(id)
             console.log(docSnap.data())   
              setUserInput(data)
        } catch(error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
      fetchData()
    },[])

  

    const editWithInput = (e) => {
      const id = e.target.id;
      const value = e.target.value;
      setUserInput({ ...userInput, [id]: value });

      const docRef = doc(db, "Products", id)
      setDoc(docRef, userInput)
      .then(docRef => {
          console.log("Entire Document has been updated successfully");
      })
      .catch(error => {
          console.log(error);
      })

    };
    

    


 if (!userInput){
  return(
    <p>Loading...</p>
  )
 }
 // Consider Saving values, onchange will send a ton of requests to my backend. 
  return (

    <div className="container1">
  
    <h2>EDIT PRODUCTS</h2>
  
    <form autoComplete="off" className="form-group1" 
    
    
    >
      <br />
      <label htmlFor="product-name">Product Title</label>
      <br />
      <input
        type="text"
        className="form-control"
        required
        value={userInput.Title}
        onChange={editWithInput}
        id="Title"
      />
      <br />
       <label htmlFor="product-name">Product Description</label>
      <br />
     
      <textarea
        type="text"
        className="text-area"
        required
        value={userInput.Description}
        onChange={editWithInput}
        id="Description"
      />
      <br />
      <label htmlFor="product-price">Product Price</label>
      <br />
      <input
        type="number"
        className="form-control"
        required
        value={userInput.Price}
        onChange={editWithInput}
        id="Price"
      />
              <br />
        <label htmlFor="product-Brand">Product Brand</label>
        <br />
        <input
          type="text"
          className="form-control"
          required
          value={userInput.Brand}
          onChange={editWithInput}
          id="Brand"
        />
        <br />
        <label htmlFor="product-Size">Product Size</label>
        <br />
        <input
          type="text"
          className="form-control"
          required
          value={userInput.Size}
          onChange={editWithInput}
          id="Size"
        />
      {/* <br />
      <label htmlFor="product-img">Product Image</label> */}
      {/* <input
        type="file"
        className="form-control"
        multiple="multiple"
        id="images"
        required
        onChange={(e) => setFiles(e.target.files)}
      /> */}
      <br />
      <button type="submit" className="btn btn-success btn-md mybtn">
        Edit 
      </button>
    </form>
    {/* {error && <span className="error-msg">{error}</span>} */}
  </div>
  )
}
