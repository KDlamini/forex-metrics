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
    <div>
      Stocks
    </div>
  );
}

export default Stocks;
