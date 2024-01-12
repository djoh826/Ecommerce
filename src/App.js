import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="shop/" element={<Shop tag="" />} />
        <Route path="shop/sale" element={<Shop tag="sale" />} />
        <Route path="shop/apparel" element={<Shop tag="apparel" />} />
        <Route path="shop/accessories" element={<Shop tag="accessories" />} />
        <Route path="shop/furniture" element={<Shop tag="furniture" />} />

        <Route path="product/*" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
