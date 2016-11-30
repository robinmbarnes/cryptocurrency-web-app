import ReactDOM from 'react-dom';
import React from 'react';
import ConnectedAppContainer from 'containers/connected-app-container';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from 'reducers';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import apiSaga from 'sagas/api';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), sagaMiddleware)
);
sagaMiddleware.run(apiSaga);

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedAppContainer />
  </Provider>,
  document.getElementById('container')
);
