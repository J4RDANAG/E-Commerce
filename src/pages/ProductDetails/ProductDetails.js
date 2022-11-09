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
    const {id} = useParams()

    const fetchData = async () => {
      
        const docRef = doc(db, "Products", id);
        try {
            const docSnap = await getDoc(docRef);
             let data = docSnap.data() 
             console.log(docSnap.data())   
              setProductImages(data.imgs)
             

        } catch(error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
      fetchData()
    },[])
    console.log(productImages)
  return (
    <div>
      <NavBar/> 
      <ShoppingCart/>
      <div className='products'>
      <div className='products__slider-wrapper'>
      <Carousel showThumbs={false} showArrows={true} autoPlay className='products__slider'>
       
      {productImages?.map((product, index) => (
        
             <img src={product} key={index} className='products__image'/>
             
            ))}
           
        </Carousel>
        </div>
        <div>
        <p>Details</p>
        <p>Details</p>
        <p>Details</p>
        <p>Details</p>
        </div>
        
        </div>
      <div className='mobileNav'>
        <MobileNav/>
        <MobileCart/>
      </div>
      </div>
  )
}