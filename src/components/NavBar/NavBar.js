import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import ShoppingCart from '../../assets/Icons/ShoppingCart.svg'
import MobileCart from '../../assets/Icons/MobileCart.svg'
import Accordian from '../../assets/Icons/Accordian.svg'
import closeNav from '../../assets/Icons/DeleteIcon.svg'

export default function NavBar() {
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
        <Link className='nav__link  nav__link--cart'>
            <img src={ShoppingCart}/>
        </Link>
        
            {/* Shopping Cart SVG, with incrementing number, MODAL? */}
        </nav>
        <nav className='mobile-nav'>
            <div>f_cking sick</div>
            <button className='mobile-nav__btn'onClick={handleToggle}>{navBarOpen ? <img src={closeNav}/> : 'open' }</button>
            <ul className={`mobile-nav__ul ${navBarOpen ? " mobile-nav--show" : ""}`}>
                <Link className='mobile-nav__link'><li className='mobile-nav__list-item'>Home</li></Link>
                <Link className='mobile-nav__link'><li>About</li></Link>
                <Link className='mobile-nav__link'><li>Shop</li></Link>
                <Link className='mobile-nav__link'><li>Shopping Cart</li></Link>
            </ul>

        </nav>
        
    
    </>
  )
}
