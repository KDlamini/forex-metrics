import * as api from '../../api/api';
import * as market from '../../components/data';
import {
  GET_FOREX, GET_CRYPTOS, GET_STOCKS, GET_COMMODITIES,
} from './actionTypes';

// API action creators
export const getForex = () => async (dispatch) => {
  try {
    const data = await api.fetchFxPrices();

    dispatch({ type: GET_FOREX, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCommodities = () => async (dispatch) => {
  try {
    const data = await api.fetchCommodities();

    dispatch({ type: GET_COMMODITIES, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCryptos = () => (dispatch) => {
  try {
    const data = [];

    market.cryptos.forEach(async (crypto) => {
      const { symbol } = crypto;
      const cryptoData = await api.fetchCryptos(symbol);

      data.push(cryptoData);
    });

    dispatch({ type: GET_CRYPTOS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getStocks = () => (dispatch) => {
  try {
    const data = [];

    market.stocks.forEach(async (stock) => {
      const { name, symbol } = stock;
      const stockData = await api.fetchStocks(symbol);
      stockData.name = name;

      data.push(stockData);
    });

    dispatch({ type: GET_STOCKS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};
