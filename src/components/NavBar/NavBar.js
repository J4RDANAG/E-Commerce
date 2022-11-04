import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.scss'
import ShoppingCart from '../../assets/Icons/ShoppingCart.svg'
import MobileCart from '../../assets/Icons/MobileCart.svg'
import Accordian from '../../assets/Icons/Accordian.svg'
import closeNav from '../../assets/Icons/DeleteIcon.svg'
import CartContext from '../../context/cart/CartContext'



export default function NavBar() {
    const { cartItems, showHideCart} = useContext(CartContext)
   
    const [navBarOpen, setNavBarOpen] = useState(false)
    const handleToggle = () => {
        setNavBarOpen(!navBarOpen)
      }

  return (
    <>
        <nav className='nav'>
            <div className='nav__container'>
            <Link to='/' className='nav__link'>
                <div className='nav__header-container'>
                    <h1 className='nav__header1'>f_cking</h1>
                    <h1 className='nav__header2'>sick</h1>
                </div>
            </Link>
        <Link to='/about' className='nav__link'>About</Link>
        <Link to='/products' className='nav__link'>Shop All</Link>
        </div>
        <button className='nav__link--cart' onClick={showHideCart}>
            <img src={ShoppingCart}/>
            
            { cartItems.length > 0 && <div className='nav__cart-items'><span>{cartItems.length}</span></div> }
        </button>
        
        
            
        </nav>
        <nav className='mobile-nav'>
            <div>
                <div>f_cking</div> 
                <div>sick</div>
            </div>
            <button className='mobile-nav__btn'onClick={handleToggle}>{navBarOpen ? <img src={closeNav}/> : 'open' }</button>
            <ul className={`mobile-nav__ul ${navBarOpen ? " mobile-nav--show" : ""}`}>
                <Link className='mobile-nav__link' to='/'><li className='mobile-nav__list-item'>Home</li></Link>
                <Link className='mobile-nav__link' to='/about'><li>About</li></Link>
                <Link className='mobile-nav__link' to='/products'><li>Shop</li></Link>
                <Link className='mobile-nav__link'><li>Shopping Cart</li></Link>
            </ul>

        </nav>
        
        {/* { cartItems > 0 && <div className='mobile-nav__cart-items'></div> } */}
    </>
  )
}
