import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { CartItem } from './models/CartItem';
import { IProduct } from './models/IProduct';
import { Header } from './pages/Header/header';
import { Nav } from './pages/Nav/nav';
import { Product } from './pages/Product/product';
import { Products } from './pages/Products/products';





function App() {

  const [cart,setCart] = useState <CartItem[]>([]);

  const addItemToCart = (product:IProduct) =>{

    // setCart();
  }



  return ( 
    <>
    <header>
    <Header cart={cart}>
     <Nav/>
     </Header>
    </header>
      <main>
      <Products addToCart={addItemToCart}/>
      <Outlet/>
      <Outlet/>
      </main>
      
      </>);
}

export default App;
