import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import itemsReducer from './features/itemsSlice';
import cartsReducer, { grandTotal } from './features/cartsSlice';


const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartsReducer,
  },
});

store.dispatch(grandTotal());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
