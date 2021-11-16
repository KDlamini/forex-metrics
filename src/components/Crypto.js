import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptos } from '../redux/actions/markets';

function Crypto() {
  const cryptos = useSelector((state) => state.cryptos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!cryptos.length) {
      dispatch(getCryptos());
    }
  }, []);

  return (
    <div>Crypto</div>
  );
}

export default Crypto;
