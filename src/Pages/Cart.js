import React, { useContext } from 'react'
import { CartContext } from '../context';
import './Cart.css';

function Cart() {
const {cart, setCart, addToCart, subFromCart} = useContext(CartContext);
const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((cartItem) => productToRemove !== cartItem)
    );
  };

  const getTotalCost = () => {
      return cart.reduce((sum,  {price, quantity} ) => sum + price * quantity, 0);
  }


// Map Cart
// add some CSS
    return (
        
          <div className="cart-header">
                  <h2 className="cart-total">Total Cost £{getTotalCost()}</h2>
           {cart.length > 0 && <div className="btn-center"> <button className="empty-btn" onClick={() => setCart([])}>Empty Cart</button></div>}
            {cart.map((cartItem, id) => {
                
               

           return (
            
            <article key={id} className="cart-container">
<div className="cart-third">
<img className="cart-img" src={cartItem.img} alt={cartItem.model} />
</div>
<div className="cart-third">
<h2 className="cart-title" >{cartItem.manufacturer} {cartItem.model}</h2>
<h4 className="cart-price">£{cartItem.price}</h4>
<div className="cart-quantity">
                <button className="sign-btn" onClick={() => addToCart(cartItem)}>+</button>
            <h4>{cartItem.quantity}</h4>
            <button className="sign-btn" onClick={() => subFromCart(cartItem)}>-</button>
            </div>
</div>
<div className="cart-third">
<button className="btn" onClick={() => removeFromCart(cartItem)}>remove</button>
           {cartItem.quantity <= 0 && removeFromCart(cartItem)}
</div>
            
            
            
            
            

          </article>
          )
            
            
        })}


        </div>
    )
}

export default Cart;
