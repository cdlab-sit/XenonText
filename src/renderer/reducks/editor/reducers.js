import {
  SET_SELECTED_TEXT,
  SET_TEXT,
  SET_ACTIVE_EDITOR_ID,
  SET_NEW_DOCUMENT,
  SET_MY_EDITOR_ID,
} from './actions';
import { getMyDocument } from './selectors';
import initialState from '../store/initialState';

const documentTemplate = {
  // editorId: 'editor1',
  editorId: '',
  selectedText: null,
  editedText: '',
  fileText: 'documentTemplate',
  fileName: 'Untitled',
  filePath: null,
};
const EditorReducer = (state = initialState.editor, action) => {
  switch (action.type) {
    case SET_TEXT: {
      const { editorId } = action.payload;
      const document = getMyDocument(state, editorId);
      const newDocument = {
        ...document,
        editedText: action.payload.text,
      };
      const newDocuments = state.documents.map((el) =>
        el.editorId === document.editorId ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }

    case SET_SELECTED_TEXT: {
      const { editorId } = action.payload;
      const document = getMyDocument(state, editorId);
      const newDocument = {
        ...document,
        selectedText: action.payload.selectedText,
      };
      const newDocuments = state.documents.map((el) =>
        el.editorId === document.editorId ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }

    case SET_ACTIVE_EDITOR_ID:
      return {
        ...state,
        ...action.payload,
      };
    case SET_NEW_DOCUMENT: {
      const newDocuments = {
        ...state,
        documents: [...state.documents, documentTemplate],
      };
      return {
        ...newDocuments,
      };
    }
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
