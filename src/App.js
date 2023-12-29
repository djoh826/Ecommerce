import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Collections from './Components/Collections';
import Sale from './Components/Sale';
import Apparel from './Components/Apparel';
import Accessories from './Components/Accessories';
import Furniture from './Components/Furniture';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="collections/" element={<Collections />}>
          <Route path="sale" element={<Sale />} />
          <Route path="apparel" element={<Apparel />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="furniture" element={<Furniture />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
