import Routes from './routes';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import React from 'react';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

const logger = createLogger();
const middlewares = [thunk, logger];

const store = compose(
  applyMiddleware(...middlewares)
)(createStore)(reducers);

export default function App() {
  return (
    <Provider store = { store }>
      <Routes />
    </Provider>
  );
}