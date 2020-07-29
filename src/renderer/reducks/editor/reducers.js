import {
  SET_SELECTED_TEXT,
  SET_TEXT,
  SET_ACTIVE_EDITOR_ID,
  SET_NEW_DOCUMENT,
  SET_MY_EDITOR_ID,
  DELETE_MY_DOCUMENT,
} from './actions';
import { getMyDocument } from './selectors';
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
      const { editorId } = action.payload;
      const document = getMyDocument(state, editorId);
      if (document === undefined) return { ...state };
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
      if (document === undefined) return { ...state };
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
    case DELETE_MY_DOCUMENT: {
      let deletedIndex;
      let nextActiveEditorIndex;
      /* 対象のDocumentを抜いたDocumentsを作成 */
      const newDocuments = state.documents.filter((value, index) => {
        if (value.editorId !== action.payload.editorId) {
          return value;
        }
        deletedIndex = index;
        return null;
      });
      const documentsCount = newDocuments.length;

      switch (true) {
        /* 全てのタブを削除した場合 */
        case documentsCount === 0:
          return {
            ...state,
            activeEditorId: '',
            documents: [],
          };
        /* 削除したタブが右端の場合 */
        case documentsCount === deletedIndex:
          nextActiveEditorIndex = deletedIndex - 1;
          break;
        /* 削除したタブの右に, 他のタブがある場合 */
        default:
          nextActiveEditorIndex = deletedIndex;
      }

      return {
        ...state,
        activeEditorId: newDocuments[nextActiveEditorIndex].editorId,
        documents: newDocuments,
      };
    }

    default:
      return { ...state };
  }
};
export default EditorReducer;
