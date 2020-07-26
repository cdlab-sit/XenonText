import {
  SET_SELECTED_TEXT,
  SET_TEXT,
  SET_ACTIVE_EDITOR_ID,
  SET_NEW_EDIT,
} from './actions';
import { getActiveEditorInfo } from './selectors';
import initialState from '../store/initialState';

const newEditTemplate = {
  editorId: '',
  selectedText: '',
  text: '',
};

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
    case SET_NEW_EDIT:
      return {
        ...state,
        editorInfo: [...state.editorInfo, newEditTemplate],
      };
    default:
  }
  return {
    ...state,
  };
};

export default EditReducer;
