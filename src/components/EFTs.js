import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEFTs } from '../redux/actions/markets';

function EFTs() {
  const efts = useSelector((state) => state.efts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!efts.length) {
      dispatch(getEFTs());
    }
  }, []);

  return (
    <section className="efts">
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
