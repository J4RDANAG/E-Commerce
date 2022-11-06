import React, { useContext } from 'react'
import './MobileNav.scss'
import { Link } from 'react-router-dom'
import mobileHome from '../../assets/Icons/mobileHome.svg'
import mobileAbout from '../../assets/Icons/mobileAbout.svg'
import mobileCart from '../../assets/Icons/MobileCart.svg'
import mobileStore from '../../assets/Icons/store.svg'
import CartContext from '../../context/cart/CartContext'


export const MobileNav = () => {
    const { cartItems, mobileShowHideCart} = useContext(CartContext)
  return (
    <div className='bottom-nav'>
        <Link to='/'>
        <div>
            <img src={mobileHome}/>
        </div>
        </Link>
        <Link to='/about'>
        <div>
            <img src={mobileAbout}/>
        </div>
        </Link>
        <Link to='/products'>
        <div>
            <img  src={mobileStore}/>
        </div>
        </Link>
       
        <button className='bottom-nav__cart' onClick={mobileShowHideCart}>
            <img src={mobileCart}/>
            { cartItems.length > 0 && <div className='bottom-nav__items'><span>{cartItems.length}</span></div> }
        </button>
    </div>
  )
}
