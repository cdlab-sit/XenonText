import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './reducks/store/store';

/*
 *  ストアの状態を表示
 * store.subscribe(() => console.log(store.getState()));
 */

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('app'),
);
