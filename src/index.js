// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import './index.css';

const root = document.getElementById('root');
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

if (root?.hasChildNodes()) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}
