import * as api from '../../api/api';
import { GET_FOREX } from './actionTypes';

// API action creators
const getFxPrices = () => async (dispatch) => {
  try {
    const data = await api.fetchFxPrices();

    dispatch({ type: GET_FOREX, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getFxPrices;
