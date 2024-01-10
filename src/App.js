import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="shop" element={<Shop />}>
          <Route path="sale" />
          <Route path="apparel" />
          <Route path="accessories" />
          <Route path="furniture" />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
