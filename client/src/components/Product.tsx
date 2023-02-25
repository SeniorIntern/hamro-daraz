import React from 'react';
import '../styles/Product.css';
import iphone from '../assets/iphone.png';

export default function Product() {
  return (
    <div className="product">
      <div className="product__img">
        <img src={iphone} id="productImg" alt="iphone 14" />
      </div>
      <div className="product__title">
        <p>Apple iPhone 14 Pro Max</p>
        <p>Rs. 226,990</p>
        <p>✨✨✨</p>
      </div>
    </div>
  );
}
