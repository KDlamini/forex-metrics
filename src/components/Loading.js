import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { categories } from './data';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/EFTs.css';

function Loading({
  section, page, banner, matchCategory, middleBar, body,
}) {
  const navigate = useNavigate();

  return (
    <section className={section}>
      <div className="top-bar">
        <button
          type="button"
          className="go-back"
          onClick={() => navigate('/')}
        >
          <i className="chevron left icon" />
        </button>
        <h4>{page}</h4>
        <div className="top-left" />
      </div>

      <div className={`banner ${banner}`}>
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === `${matchCategory}` && (
          <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
            <div className="banner-info">
              <h3 className="banner-title">{category}</h3>
              <p className="total">{`Market Capitalization: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>

      <h4 className="sub-heading">{middleBar}</h4>

      <ul className={`${body} loading`}>
        <li>
          <Loader type="ThreeDots" color="var(--text-color)" height={80} width={80} />
        </li>
      </ul>
    </section>
  );
}

Loading.propTypes = {
  section: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  matchCategory: PropTypes.string.isRequired,
  middleBar: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Loading;
