import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import { createStore } from '../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import App from './index';

const redux = createStore(reducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={redux}>
  <App />
  </Provider>
  ReactDOM.unmountComponentAtNode(div);
});
