import { GET_FOREX } from '../actions/actionTypes';

const fxPrices = (state = [], action) => {
  switch (action.type) {
    case GET_FOREX:
      return action.payload;

    default:
      return state;
  }
};

export default fxPrices;
