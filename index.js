import ReactDOM from 'react-dom';
import React from 'react';
import ConnectedAppContainer from 'containers/connected-app-container';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from 'reducers';
import createLogger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(createLogger()));

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedAppContainer />
  </Provider>,
  document.getElementById('container')
);
