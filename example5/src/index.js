import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

render(
  <div>
    <App />
  </div>,
  rootElement
);
