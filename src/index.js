import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import multi from 'redux-multi'

import promise from 'redux-promise'

import reducers from './redux/generalReducers.js'

// estado único da aplicação
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
