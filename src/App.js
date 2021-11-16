import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Crypto from './components/Crypto';
import './App.css';

function App() {
  return (
    <div className="markets">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;
