import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommodities } from '../redux/actions/markets';

function Commodities() {
  const commodities = useSelector((state) => state.commodities);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!commodities.length) {
      dispatch(getCommodities());
    }
  }, []);

  return (
    <div>
      Commodities
    </div>
  );
}

export default Commodities;
