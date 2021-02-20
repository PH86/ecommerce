import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context';
import products from '../data';

function Product() {

const {addToCart} =  useContext(CartContext)

const { id } = useParams();

const singleProduct = products.filter(product => product.id == id)

    return (
        <>
{singleProduct.map(item => 
    <div>
<article key={item.id} className="product-item">
            <h2 className="product-title" >{item.manufacturer} {item.model}</h2>
            <img className="product-img" src={item.img} alt={item.model} />
            
            <h4 className="product-price">£{item.price}</h4>
            <p className="product-desc">{item.desc}</p>
<button className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
          </article>
       </div>
 
    )}
        </>
    )
}

export default Product;
