import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from '../reducers';
import NavigationBar from './NavigationBar';

export default ({ children, initialState = {} }) => {

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return(
    <Provider store={store}>
      <NavigationBar />
    </Provider>
  );
};
