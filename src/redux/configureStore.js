import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import fxPrices from './reducers/forex';
import commodities from './reducers/commodities';

const reducer = combineReducers({
  fxPrices, commodities,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

export default store;
