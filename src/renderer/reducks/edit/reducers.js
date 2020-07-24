import { SET_SELECTED_TEXT, SET_TEXT } from './actions';
import { getActiveEditorInfo } from './selectors';
import { initialState } from '../store/initialState';

// eslint-disable-next-line default-param-last
export const EditReducer = (state = initialState.edit, action) => {
  const activeEditorInfo = getActiveEditorInfo(state);
  switch (action.type) {
    case SET_TEXT:
      activeEditorInfo.text = action.payload.text;
      break;
    case SET_SELECTED_TEXT:
      activeEditorInfo.selectedText = action.payload.selectedText;
      break;
    default:
  }
  return {
    ...state,
  };
};
