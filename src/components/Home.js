import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories } from './data';
import { getForex, getMajors } from '../redux/actions/markets';
import '../styles/Home.css';

function Home() {
  const forex = useSelector((state) => state.forex);
  const majors = useSelector((state) => state.majors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!forex.length) {
      dispatch(getForex());
      dispatch(getMajors(forex));
    }
    if (forex.length && !majors.length) {
      dispatch(getMajors(forex));
    }
  }, []);

  return (
    <section className="homepage">
      <div className="top-bar">Top</div>
      <div className="banner">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === 'Forex' && (
          <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
            <div className="banner-info">
              <h2 className="banner-title">{category}</h2>
              <p className="total">{`Cap: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>
      <h3 className="sub-heading">Majors</h3>
      <div className="content-body">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category !== 'Forex' && (
          <Link key={path} to={`/${path}`} className={`category ${path}`}>
            <div className="category-info">
              <i className="chevron circle right icon" />
              <h2 className="category-title">{category}</h2>
              <p className="total">{`Cap: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>
      <div className="bottom-bar">Bottom</div>
    </section>
  );
}

export default Home;
