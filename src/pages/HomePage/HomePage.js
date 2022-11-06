import React, {useState, useEffect, useContext} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CartContext from '../../context/cart/CartContext'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import { MobileNav } from '../../components/MobileNav/MobileNav'
import './HomePage.scss'
import MobileCart from '../../components/MobileCart/MobileCart'



export default function HomePage() {
  
// const { getCartItems } = useContext(CartContext);
// // const {  } = CartContext;

//   useEffect(()=>{
//     getCartItems()
//   },[])

console.log(window.innerWidth)
  return (
    <div>
      <NavBar/> 
      <ShoppingCart/>
      <div className='mobileNav'>
        <MobileNav/>
        <MobileCart/>
        </div>
      </div>
  )
}

