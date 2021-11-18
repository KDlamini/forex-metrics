import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from './data';
import '../styles/Stocks.css';

function Stocks() {
  const stocks = useSelector((state) => state.stocks);
  const navigate = useNavigate();

  return (
    <section className="stocks-page">
      <div className="top-bar">
        <button
          type="button"
          className="go-back"
          onClick={() => navigate('/')}
        >
          <i className="chevron left icon" />
        </button>
        <h4>Stocks</h4>
        <div className="top-left" />
      </div>

      <div className="banner stocks">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === 'Stocks' && (
          <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
            <div className="banner-info">
              <h3 className="banner-title">{category}</h3>
              <p className="total">{`Market Capitalization: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>

      <h4 className="sub-heading">Tradable Stocks</h4>

      <ul className="forex-pairs">
        { stocks.map((stock) => {
          const { name, price, symbol } = stock;

          return (
            <li key={symbol} className="pair">
              <div className="stock-info pair-name">
                <h3 className="stock-symbol">{symbol}</h3>
                <p className="stock-name">{name}</p>
              </div>

              <div className="stock pair-prices">
                <p>
                  <span className="pair-high">Price:</span>
                  {' '}
                  {price}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Stocks;
