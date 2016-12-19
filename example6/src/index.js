import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import configureStore from './store';

const rootElement = document.getElementById('root');
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
