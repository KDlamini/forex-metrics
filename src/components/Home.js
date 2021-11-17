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
      {categories.map((item) => {
        const { path, category, market_cap: cap } = item;

        return (
          <Link key={path} to={`/${path}`} className="category">
            <div className="category-info">
              <h2 className="category-title">{category}</h2>
              <p className="total">{`Cap: ${cap}`}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default Home;
