import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from '../context';
import items from '../data';
import '../App.css'
// This will be context
const Products = ({items}) => {
  const {addToCart} =  useContext(CartContext)
  

    return ( 
        <>
        <div className="section">

        {items.map((productItem) => {
        const {id,
          manufacturer,
          model,
          img,
          desc,
          price} = productItem;
            return (
           
            <article key={id} className="product-item">
              <Link to={`/${id}`} >
              <img className="product-img" src={img} alt={model} />
              </Link>
            <h2 className="product-title" >{manufacturer} {model}</h2>
            
            
            <h4 className="product-price">£{price}</h4>
            

<button className="btn" onClick={() => addToCart(productItem)}>Add to Cart</button>
          </article>)
            
            
        })}
</div>
        </>
    )
}

export default Products
