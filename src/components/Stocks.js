import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from '../redux/actions/markets';

function Stocks() {
  const stocks = useSelector((state) => state.stocks);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!stocks.length) {
      dispatch(getStocks());
    }
  }, []);

  return (
    <section className="stocks">
      <ul className="forex-pairs">
        { stocks.map((stock) => {
          const { name, price, symbol } = stock;

          return (
            <li key={symbol} className="stock">
              <div className="stock-info">
                <h3 className="stock-symbol">{symbol}</h3>
                <p className="stock-name">{name}</p>
              </div>

              <div className="stock-prices">
                <p>{`Price: $${price}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Stocks;
