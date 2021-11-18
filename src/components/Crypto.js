import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptos } from '../redux/actions/markets';

function Crypto() {
  const cryptos = useSelector((state) => state.cryptos);
  const filterCryptos = cryptos.filter((crypto) => crypto !== undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!cryptos.length) {
      dispatch(getCryptos());
    }
  }, []);

  return (
    <section className="cryptos-page">
      <ul className="crypto-pairs">
        { filterCryptos.map((pair) => {
          const {
            name, symbol, price, change,
          } = pair;

          return (
            <li key={symbol} className="pair">
              <div className="crypto-info">
                <h3 className="crypto-symbol">{symbol}</h3>
                <p className="pair-name">{name}</p>
              </div>

              <div className="pair-prices">
                <p>{`Price: ${price}`}</p>
                {
                  change > 0
                    ? (
                      <p>
                        Change: &nbsp;
                        <span className="positive">
                          {`+${change.toFixed(5)} `}
                          &#9650;
                        </span>
                      </p>
                    )
                    : (
                      <p>
                        Change: &nbsp;
                        <span className="negative">
                          {`${change.toFixed(5)} `}
                          &#9660;
                        </span>
                      </p>
                    )
                }
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Crypto;
