import { SET_SELECTED_TEXT, SET_TEXT, SET_ACTIVE_EDITOR_ID } from './actions';
import { getActiveEditorInfo } from './selectors';
import initialState from '../store/initialState';

const EditReducer = (state = initialState.edit, action) => {
  const activeEditorInfo = getActiveEditorInfo(state);
  switch (action.type) {
    case SET_TEXT:
      activeEditorInfo.text = action.payload.text;
      break;
    case SET_SELECTED_TEXT:
      activeEditorInfo.selectedText = action.payload.selectedText;
      break;
    case SET_ACTIVE_EDITOR_ID:
      return {
        ...state,
        ...action.payload,
      };
    default:
  }
  return {
    ...state,
  };
};

export default EditReducer;
