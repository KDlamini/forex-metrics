import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Crypto from './components/Crypto';
import Stocks from './components/Stocks';
import './App.css';

function App() {
  return (
    <div className="markets">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;
