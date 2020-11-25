import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axiosReducer from './axiosRedux';

// define initial state and shallow-merge initial data
const initialState = {
  global: {
    data: {},
    loading: {
      active: false,
      error: false,
      fetch: false,
    },
  },
};

// define reducers
const reducers = {
  global: axiosReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;