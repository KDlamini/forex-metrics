import { GET_COMMODITIES } from '../actions/actionTypes';

const commodities = (state = [], action) => {
  switch (action.type) {
    case GET_COMMODITIES:
      return action.payload;

    default:
      return state;
  }
};

export default commodities;
