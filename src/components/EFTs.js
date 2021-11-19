import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { categories, loadingPage } from './data';
import Loading from './Loading';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/EFTs.css';

function EFTs() {
  const efts = useSelector((state) => state.efts);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (efts.length) {
      setIsLoading(false);
    }
  });

  if (isLoading) {
    return (
      loadingPage.map((params) => {
        const {
          section, page, banner, matchCategory, middleBar, body,
        } = params;

        return (
          page === 'ETFs' && (
          <Loading
            section={section}
            page={page}
            banner={banner}
            matchCategory={matchCategory}
            middleBar={middleBar}
            body={body}
          />
          )
        );
      })
    );
  }

  return (
    <section className="efts-page">
      <div className="top-bar">
        <button
          type="button"
          className="go-back"
          onClick={() => navigate('/')}
        >
          <i className="chevron left icon" />
        </button>
        <h4>ETFs</h4>
        <div className="top-left" />
      </div>

      <div className="banner efts">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === 'ETF iShares' && (
            <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
              <div className="banner-info">
                <h3 className="banner-title">{category}</h3>
                <p className="total">{`Market Capitalization: ${cap}`}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <h4 className="sub-heading">Tradable ETF iShares</h4>

      <ul className="eft-pairs">
        { efts.map((eft) => {
          const { name, price, symbol } = eft;

          return (
            <li key={symbol} className="pair">
              <div className="eft-info pair-name">
                <h3 className="eft-symbol">{symbol}</h3>
                <p className="eft-name">{name}</p>
              </div>

              <div className="eft pair-prices">
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

export default EFTs;
