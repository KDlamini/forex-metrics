import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from './data';
import '../styles/Crypto.css';

function Crypto() {
  const cryptos = useSelector((state) => state.cryptos);
  const filterCryptos = cryptos.filter((crypto) => crypto !== undefined);

  const navigate = useNavigate();

  return (
    <section className="cryptos-page">
      <div className="top-bar">
        <button
          type="button"
          className="go-back"
          onClick={() => navigate('/')}
        >
          <i className="chevron left icon" />
        </button>
        <h4>Crypto Currencies</h4>
        <div className="top-left" />
      </div>

      <div className="banner crypto">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === 'Cryptos' && (
          <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
            <div className="banner-info">
              <h3 className="banner-title">{category}</h3>
              <p className="total">{`Market Capitalization: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>

      <h4 className="sub-heading">Tradable Crypto Pairs</h4>

      <ul className="crypto-pairs">
        { filterCryptos.map((pair) => {
          const {
            name, symbol, price, change,
          } = pair;

          return (
            <li key={symbol} className="pair">
              <div className="crypto-info pair-name">
                <h3 className="crypto-symbol">{symbol}</h3>
                <p className="crypto-name">{name}</p>
              </div>

              <div className="pair-prices">
                <p>
                  <span className="pair-high">Price:</span>
                  {' '}
                  {price}
                </p>
                {
                  change > 0
                    ? (
                      <p>
                        <span className="pair-change">Change:</span>
                        {' '}
                        <span className="positive">
                          {`+${change.toFixed(5)} `}
                          &#9650;
                        </span>
                      </p>
                    )
                    : (
                      <p>
                        <span className="pair-change">Change:</span>
                        {' '}
                        <span className="negative">
                          {`${change.toFixed(5)} `}
                          &#9660;
                        </span>
                      </p>
                    )
                }
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Crypto;
