import {
  SET_SELECTED_TEXT,
  SET_TEXT,
  SET_ACTIVE_EDITOR_ID,
  SET_NEW_EDIT,
} from './actions';
import { getActiveDocument } from './selectors';
import initialState from '../store/initialState';

const documentTemplate = {
  editorId: '',
  selectedText: null,
  editedText: '',
  fileText: '',
  fileName: 'Undefined',
  filePath: null,
};

const EditorReducer = (state = initialState.editor, action) => {
  const activeDocument = getActiveDocument(state);
  switch (action.type) {
    case SET_TEXT:
      activeDocument.text = action.payload.text;
      break;
    case SET_SELECTED_TEXT:
      activeDocument.selectedText = action.payload.selectedText;
      break;
    case SET_ACTIVE_EDITOR_ID:
      return {
        ...state,
        ...action.payload,
      };
    case SET_NEW_EDIT:
      return {
        ...state,
        documents: [...state.documents, documentTemplate],
      };
    default:
  }
  return {
    ...state,
  };
};
export default EditorReducer;
