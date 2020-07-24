import { remote } from 'electron';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './reducks/store/store';
import applicationMenuTemplate from './menus/ApplicationMenus';

const applicationMenu = remote.Menu.buildFromTemplate(
  applicationMenuTemplate(),
);
const store = createStore();

remote.Menu.setApplicationMenu(applicationMenu);

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
