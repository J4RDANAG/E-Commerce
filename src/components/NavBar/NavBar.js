import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import ShoppingCart from '../../assets/Icons/ShoppingCart.svg'

export default function NavBar() {
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
        
    
    </>
  )
}
