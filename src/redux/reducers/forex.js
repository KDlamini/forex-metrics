import { GET_PRICES } from '../actions/actionTypes';

const fxPrices = (state = [], action) => {
  switch (action.type) {
    case GET_PRICES:
      return action.payload;

    default:
      return state;
  }
};

export default fxPrices;
