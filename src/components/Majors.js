import React from 'react';
import { useSelector } from 'react-redux';

function Majors() {
  const majors = useSelector((state) => state.majors);

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
                {
                  changes > 0
                    ? (
                      <p>
                        Change: &nbsp;
                        <span className="positive">
                          {`+${changes.toFixed(5)} `}
                          &#9650;
                        </span>
                      </p>
                    )
                    : (
                      <p>
                        Change: &nbsp;
                        <span className="negative">
                          {`${changes.toFixed(5)} `}
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

export default Majors;
