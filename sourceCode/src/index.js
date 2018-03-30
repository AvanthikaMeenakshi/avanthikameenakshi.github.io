import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const history = createBrowserHistory();
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunkMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);