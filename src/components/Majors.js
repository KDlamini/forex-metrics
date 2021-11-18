import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from './data';
import { getMajors } from '../redux/actions/markets';
import '../styles/Home.css';
import '../styles/Forex.css';

function Majors() {
  const forex = useSelector((state) => state.forex);
  const majors = useSelector((state) => state.majors);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (forex.length && !majors.length) {
      dispatch(getMajors(forex));
    }
  }, []);

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

      <ul className="major-pairs">
        { majors.map((pair) => {
          const {
            ticker, high, low, changes,
          } = pair;

          return (
            <li key={ticker} className="pair">
              <h3 className="pair-name">{ticker}</h3>
              <div className="pair-prices">
                <p>
                  <span className="pair-high">High:</span>
                  {' '}
                  {high}
                </p>
                <p>
                  <span className="pair-low">Low:</span>
                  {' '}
                  {low}
                </p>
                {
                  changes > 0
                    ? (
                      <p>
                        <span className="pair-change">Change:</span>
                        {' '}
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
