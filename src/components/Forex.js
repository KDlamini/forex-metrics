import React from 'react';
import { useSelector } from 'react-redux';

function Forex() {
  const forex = useSelector((state) => state.forex);

  return (
    <section className="forex">
      <ul className="forex-pairs">
        { forex.map((pair) => {
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

export default Forex;
