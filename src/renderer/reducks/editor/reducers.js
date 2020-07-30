import {
  SET_SELECTED_TEXT,
  SET_TEXT,
  SET_ACTIVE_EDITOR_ID,
  SET_NEW_DOCUMENT,
  SET_EDITOR_ID,
  DELETE_DOCUMENT,
} from './actions';
import { getDocument } from './selectors';
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
      /* editorIdに対応したdocumentを取得 */
      const document = getDocument(state, editorId);
      if (document === undefined) return { ...state };
      /* editedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        editedText: action.payload.text,
      };
      /* 更新documentを含むdocumentsを生成 */
      const newDocuments = state.documents.map((el) =>
        el.editorId === document.editorId ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }

    case SET_SELECTED_TEXT: {
      const { editorId } = action.payload;
      /* editorIdに対応したdocumentを取得 */
      const document = getDocument(state, editorId);
      if (document === undefined) return { ...state };
      /* selectedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        selectedText: action.payload.selectedText,
      };
      /* 更新documentを含むdocumentsを生成 */
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
    case SET_NEW_DOCUMENT:
      return {
        ...state,
        /* documentTemplateを追加する */
        documents: [...state.documents, documentTemplate],
      };
    case SET_EDITOR_ID: {
      /* editorIdを付与したdocumentを作成 */
      const newDocument = {
        ...documentTemplate,
        editorId: action.payload.editorId,
      };
      /* editorIdが''のdocumentをnewDocumentに更新する */
      const newDocuments = state.documents.map((el) =>
        el.editorId === '' ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }
    case DELETE_DOCUMENT: {
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
