import React from 'react';
import { useSelector } from 'react-redux';

function EFTs() {
  const efts = useSelector((state) => state.efts);

  return (
    <section className="efts-page">
      <ul className="forex-pairs">
        { efts.map((eft) => {
          const { name, price, symbol } = eft;

          return (
            <li key={symbol} className="eft">
              <div className="eft-info">
                <h3 className="eft-symbol">{symbol}</h3>
                <p className="eft-name">{name}</p>
              </div>

              <div className="eft-prices">
                <p>{`Price: $${price}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default EFTs;
