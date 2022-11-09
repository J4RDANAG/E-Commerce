import React, {useState, useEffect, useContext} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CartContext from '../../context/cart/CartContext'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import { MobileNav } from '../../components/MobileNav/MobileNav'
import './ProductDetails.scss'
import MobileCart from '../../components/MobileCart/MobileCart'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




export default function ProductDetails() {
    const [productImages, setProductImages] = useState()
    const [productDetails, setProductDetails] = useState()
    const {id} = useParams()
    // add fetched object into an empty array to map over it.
   
    const fetchData = async () => {
     
        const docRef = doc(db, "Products", id);
        try {
            const docSnap = await getDoc(docRef);
             let data = docSnap.data() 
             console.log(docSnap.data()) 
             const productData = []
            console.log(productData)
             productData.push(data)  
             setProductDetails(productData)
              setProductImages(data.imgs)
             

        } catch(error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
      fetchData()
    },[])

    if (!productDetails){
      return <p>Loading...</p>
    }
    if (!productImages){
      return <p>Loading...</p>
    }
  return (
    <div>
      <NavBar/> 
      <ShoppingCart/>
      <div className='product-details'>
      <div className='products__slider-wrapper'>
      <Carousel showThumbs={false} showArrows={true} autoPlay className='products__slider'>
       
      {productImages?.map((product, index) => (
        
             <img src={product} key={index} className='products__image'/>
             
            ))}
           
        </Carousel>
        </div>
       

        {productDetails?.map((product) => (
         <div className='product-details__container' key={product.id}> 
          <div className='product-details__details-wrapper'>
            <div>
          <h1>{product.Title}</h1>
          </div>
          <div>
          <p>${product.Price}</p>
          </div>
          </div>
        <div className='product-details__details-wrapper'>
          <div><p>BRAND:  </p></div><div><p>{product.Brand}</p> </div>
        </div>
        <div className='product-details__details-wrapper'>
          <div><p>SIZE:</p></div><div><p>{product.Size}</p> </div>
        </div>
        <div className='product-details__description'>
          <p>{product.Description} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </div>
         ))}
          
        </div>
      <div className='mobileNav'>
        <MobileNav/>
        <MobileCart/>
      </div>
      </div>
  )
}