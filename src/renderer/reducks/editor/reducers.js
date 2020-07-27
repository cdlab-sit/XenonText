import {
  SET_SELECTED_TEXT,
  SET_TEXT,
  SET_ACTIVE_EDITOR_ID,
  SET_NEW_DOCUMENT,
  SET_MY_EDITOR_ID,
} from './actions';
import { getActiveDocument } from './selectors';
import initialState from '../store/initialState';

const documentTemplate = {
  editorId: '',
  selectedText: null,
  editedText: '',
  fileText: '',
  fileName: 'Untitled',
  filePath: null,
};

const EditorReducer = (state = initialState.editor, action) => {
  switch (action.type) {
    case SET_TEXT: {
      console.log('start SET_TEXT');
      const activeDocument = getActiveDocument(state);
      const newDocument = {
        ...activeDocument,
        editedText: action.payload.text,
      };
      const newDocuments = state.documents.map((el) =>
        el.editorId === activeDocument.editorId ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }
    case SET_SELECTED_TEXT: {
      const activeDocument = getActiveDocument(state);
      activeDocument.selectedText = action.payload.selectedText;
      return { ...state };
    }
    case SET_ACTIVE_EDITOR_ID:
      return {
        ...state,
        ...action.payload,
      };
    case SET_NEW_DOCUMENT:
      return {
        ...state,
        documents: [...state.documents, documentTemplate],
      };
    case SET_MY_EDITOR_ID: {
      const newDocument = {
        ...documentTemplate,
        editorId: action.payload.editorId,
      };
      const newDocuments = state.documents.map((el) =>
        el.editorId === '' ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }
    default:
      return { ...state };
  }
};
export default EditorReducer;
