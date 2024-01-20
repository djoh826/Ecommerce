import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Product from './Pages/Product';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState(new Map());

  const updateCart = (id, quantity) => {
    const newCart = new Map(cart);
    if (newCart.has(id)) {
      console.log('has');
      newCart.set(id, newCart.get(id) + quantity);
      console.log(newCart.size);
      newCart.forEach((value, key) => {
        console.log('Key = ' + key);
        console.log('Value = ' + value);
      });
    } else {
      console.log("hasn't");
      newCart.set(id, quantity);
    }
    setCart(newCart);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="shop/" element={<Shop tag="" />} />
        <Route path="shop/sale" element={<Shop tag="sale" />} />
        <Route path="shop/apparel" element={<Shop tag="apparel" />} />
        <Route path="shop/accessories" element={<Shop tag="accessories" />} />
        <Route path="shop/furniture" element={<Shop tag="furniture" />} />

        <Route path="product/*" element={<Product updateCart={updateCart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
