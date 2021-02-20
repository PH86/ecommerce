import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import Navbar from './components/Navbar'
import PageHeroSection from './components/PageHeroSection';
import Products from './components/Products';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './components/Footer';
import items from './data';
import './App.css';
import heroImg from './Images/Img1.jpg';
import FilterProducts from './components/FilterProducts';
import { CartContext } from './context';


const allManufacturers = ['all', ...new Set(items.map((item) => item.manufacturer))] ;


function App() {
  const [cart, setCart] = useState([])
const [productItems, setProductItems] = useState(items);
const [manufacturers, setManufacturers] = useState(allManufacturers);

const addToCart = (product) => {
let newCart = [...cart];
let itemInCart = newCart.find(
  (item) => product.id === item.id
);
if (itemInCart) {
  itemInCart.quantity++;
} else {
  itemInCart = {
    ...product, quantity: 1,
  };
  newCart.push(itemInCart);
}
  setCart(newCart);
}

const subFromCart = (product) => {
  let newCart = [...cart];
  let itemInCart = newCart.find(
    (item) => product.id === item.id
  );
  if (itemInCart) {
    itemInCart.quantity--;
  } else {
    return
  }; 
  setCart(newCart);
}

const getCartTotal = () => {
  return cart.reduce(
    (sum, { quantity }) => sum + quantity,0
  );
};

const filterItems = (manufacturer) => {
  if(manufacturer === 'all'){
    setProductItems(items);
    return;
  };
  const newItems = items.filter((item)=> item.manufacturer === manufacturer)
  setProductItems(newItems)
}

  return (

<Router>
  <CartContext.Provider value={{cart, addToCart, subFromCart, setCart, getCartTotal}}>
<Navbar />

< PageHeroSection 
src={heroImg}
pageName="Welcome"
pageDesc="Go Beyond"
/>
<Switch>
<Route path="/cart">
  <Cart />
</Route>
<Route path="/:id">
  <Product />
</Route>

<Route exact path="/">
<FilterProducts filterItems={filterItems} manufacturers={manufacturers} />
      <Products items={productItems} />
</Route>

</Switch>
<Footer />
</CartContext.Provider>
</Router>



  );
}

export default App;
