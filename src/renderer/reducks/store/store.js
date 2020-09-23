import { combineReducers, createStore as reduxCreateStore } from 'redux';
import EditorReducer from '../editor/reducers';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      editor: EditorReducer,
    }),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
