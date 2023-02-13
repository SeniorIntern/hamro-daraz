import React from 'react'
import logo from '../assets/icons/store.svg'
import cart from '../assets/icons/shopping-cart.svg'
import '../styles/Header.css'

export default function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            <input type='text' placeholder='Search in hamro daraz' />
            <img src={cart} alt='cart' />
        </div>
    )
}
