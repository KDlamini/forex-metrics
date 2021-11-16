import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="homepage">
      <Link to="/forex" className="category">Forex</Link>
      <Link to="/majors" className="category">Majors</Link>
      <Link to="/crypto" className="category">Cryptocurrencies</Link>
      <Link to="/stocks" className="category">Stocks</Link>
      <Link to="/commodities" className="category">Commodities</Link>
    </section>
  );
}

export default Home;
