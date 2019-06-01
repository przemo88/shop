import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import { createStore } from 'redux';
import App from './App';

const redux = createStore(reducer);


  ReactDOM.render(
  <Provider store={redux}>
  <App />
  </Provider>,
  document.getElementById('root')
  );
  serviceWorker.unregister();
