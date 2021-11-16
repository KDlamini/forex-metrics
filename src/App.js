import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Forex from './components/Forex';
import Majors from './components/Majors';
import Crypto from './components/Crypto';
import Stocks from './components/Stocks';
import Commodities from './components/Commodities';
import './App.css';

function App() {
  return (
    <div className="markets">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/majors" element={<Majors />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/commodities" element={<Commodities />} />
      </Routes>
    </div>
  );
}

export default App;
