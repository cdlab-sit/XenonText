import { combineReducers, createStore as reduxCreateStore } from 'redux';
import EditorReducer from '../editor/reducers';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      editor: EditorReducer,
    }),
  );
}
