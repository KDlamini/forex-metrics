import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <section className="homepage">
      <Link to="/forex" className="category">
        <div className="category-info">
          <h2 className="category-title">Forex</h2>
          <p className="total">136</p>
        </div>
      </Link>
      <Link to="/majors" className="category">
        <div className="category-info">
          <h2 className="category-title">Majors</h2>
          <p className="total">5</p>
        </div>
      </Link>
      <Link to="/crypto" className="category">
        <div className="category-info">
          <h2 className="category-title">
            Crypto
            {' '}
            <br />
            {' '}
            Currencies
          </h2>
          <p className="total">10</p>
        </div>
      </Link>
      <Link to="/stocks" className="category">
        <div className="category-info">
          <h2 className="category-title">Stocks</h2>
          <p className="total">36</p>
        </div>
      </Link>
      <Link to="/commodities" className="category">
        <div className="category-info">
          <h2 className="category-title">Commodities</h2>
          <p className="total">16</p>
        </div>
      </Link>
    </section>
  );
}

export default Home;
