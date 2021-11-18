import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from './data';
import '../styles/Home.css';
import '../styles/Forex.css';

function Majors() {
  const majors = useSelector((state) => state.majors);
  const navigate = useNavigate();

  return (
    <section className="majors-page">
      <div className="top-bar">
        <button
          type="button"
          className="go-back"
          onClick={() => navigate('/')}
        >
          <i className="chevron left icon" />
        </button>
        <h4>Major Currencies</h4>
        <div className="top-left" />
      </div>
      <div className="banner majors">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === 'Majors' && (
          <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
            <div className="banner-info">
              <h3 className="banner-title">{category}</h3>
              <p className="total">{`Market Capitalization: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>
      <h4 className="sub-heading">Tradable Forex Pairs</h4>
      <ul className="forex-pairs">
        { majors.map((pair) => {
          const {
            ticker, ask, bid, changes,
          } = pair;

          return (
            <li key={ticker} className="pair">
              <h3 className="pair-name">{ticker}</h3>
              <div className="pair-prices">
                <p>{`Ask: ${ask}`}</p>
                <p>{`Bid: ${bid}`}</p>
                {
                  changes > 0
                    ? (
                      <p>
                        Change: &nbsp;
                        <span className="positive">
                          {`+${changes.toFixed(5)} `}
                          &#9650;
                        </span>
                      </p>
                    )
                    : (
                      <p>
                        Change: &nbsp;
                        <span className="negative">
                          {`${changes.toFixed(5)} `}
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

export default Majors;
