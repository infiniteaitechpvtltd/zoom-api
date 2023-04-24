import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'

const stopConsoleLogs = () => {
  const noop = () => {};
  // override console methods
  console.log = noop;
  console.error = noop;
  console.warn = noop;
  console.info = noop;
  console.table = noop;
  console.group = noop;
  console.groupCollapsed = noop;
  console.groupEnd = noop;
};

// Call the stopConsoleLogs function to stop all console logs
//stopConsoleLogs();


const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log = function () { };
// console.clear();
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

