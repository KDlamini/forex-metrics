import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import fxPrices from './reducers/forex';
import stocks from './reducers/stocks';
import commodities from './reducers/commodities';

const reducer = combineReducers({
  fxPrices, stocks, commodities,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

export default store;
