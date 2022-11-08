import React, {useState, useEffect, useContext} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CartContext from '../../context/cart/CartContext'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import { MobileNav } from '../../components/MobileNav/MobileNav'
import './HomePage.scss'
import MobileCart from '../../components/MobileCart/MobileCart'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../assets/background-images/trippy-concrete.jpg'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useParams } from 'react-router-dom'
import logoGIf from '../../assets/logos/croppedlogo.gif'
// import { homePageImages } from '../../assets/homePageImages/homePageImages'



export default function HomePage( {  }) {
    homePageImages.push('https://picsum.photos/200')

const homePageImages = [
  'https://firebasestorage.googleapis.com/v0/b/fckingsick-2c710.appspot.com/o/image_50386177.JPG?alt=media&token=e27d4b1a-84a6-4d40-9abb-4dfeaf4b260b', 'https://picsum.photos/200', 'https://picsum.photos/200'
];


  return (
    <div>
      <NavBar/> 
      <ShoppingCart/>
      <div className='homepage'>
      <div className='products__slider-wrapper'>
      <Carousel showThumbs={false} showArrows={true} autoPlay className='products__slider'>
       
      {homePageImages.map((product, index) => (
        
        <img src={product} key={index} className='products__image'/>
        
       ))}

        
        </Carousel>
        
        </div>
        </div>

      <div className='mobileNav'>
        <MobileNav/>
        <MobileCart/>
        </div>
      </div>
  )
}

