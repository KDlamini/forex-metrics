import React from 'react';
import { useSelector } from 'react-redux';

function Majors() {
  const forex = useSelector((state) => state.forex);
  const majors = forex.filter((majors) => majors.ticker === 'EUR/USD'
    || majors.ticker === 'GBP/USD'
    || majors.ticker === 'USD/JPY'
    || majors.ticker === 'USD/CAD'
    || majors.ticker === 'USD/CHF'
    || majors.ticker === 'AUD/USD'
    || majors.ticker === 'NZD/USD');

  return (
    <section className="forex">
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
                <p>{`Changes: ${changes}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Majors;
