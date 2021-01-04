import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"
import App from './App';
import {ThemeProvider} from './ThemeProvider'


ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


