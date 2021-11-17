import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import forex from './reducers/forex';
import cryptos from './reducers/cryptos';
import stocks from './reducers/stocks';
import efts from './reducers/efts';

const reducer = combineReducers({
  forex, cryptos, stocks, efts,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

export default store;
