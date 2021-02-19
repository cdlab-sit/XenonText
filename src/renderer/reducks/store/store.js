import { combineReducers, createStore as reduxCreateStore } from 'redux';
import EditorReducer from '../editor/reducers';
import SettingsReducer from '../settings/reducers';

const store = reduxCreateStore(
  combineReducers({
    editor: EditorReducer,
    settings: SettingsReducer,
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
