import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
