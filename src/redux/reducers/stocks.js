import { GET_STOCKS } from '../actions/actionTypes';

const stocks = (state = [], action) => {
  switch (action.type) {
    case GET_STOCKS:
      return action.payload;

    default:
      return state;
  }
};

export default stocks;
