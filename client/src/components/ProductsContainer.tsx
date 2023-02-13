import React from 'react'
import Product from './Product'
import '../styles/ProductsContainer.css'

export default function ProductsContainer() {
    return (
        <div className='ProductsContainer'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}
