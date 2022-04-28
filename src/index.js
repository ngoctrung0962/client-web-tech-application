import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import appReducers from './store/reducers/index.reducer';
import {store} from './store/config-store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
=======
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
>>>>>>> a8e0ca5a0423f6ff16fa0cd49d70a8e013eb9c8c
  document.getElementById('root')
);

reportWebVitals();
