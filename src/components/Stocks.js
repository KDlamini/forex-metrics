import React from 'react';
import { useSelector } from 'react-redux';

function Stocks() {
  const stocks = useSelector((state) => state.stocks);

  return (
    <section className="stocks-page">
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
