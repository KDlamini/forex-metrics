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
    <div>
      EFTs
    </div>
  );
}

export default EFTs;
