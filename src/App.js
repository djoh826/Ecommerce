import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Collections from './Components/Collections';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />

      <Route path="collections" element={<Collections />} />
    </Routes>
  );
}

export default App;
