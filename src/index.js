import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import JudgbordStore from './game/Store'

ReactDOM.render(
  <Provider store={JudgbordStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

