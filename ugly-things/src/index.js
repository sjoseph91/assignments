import React from 'react';
import ReactDOM from 'react-dom';
import'./style.css'
import App from './App';
import {UglyDataProvider} from './uglyDataContext'


ReactDOM.render(
  <UglyDataProvider>
    <App />
  </UglyDataProvider>,
  document.getElementById('root')
);

