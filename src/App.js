import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Product from './Product';
import Header from './Header';
import H from './Homefilter';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <BrowserRouter  >
        <Header countCartItems={cartItems.length} />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/Cart' element={< Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path='/Product' element={< Product onAdd={onAdd} />} />
          <Route path='/:categories' element={<H onAdd={onAdd} />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;