import { v4 as uuidv4 } from 'uuid';

import {
  SET_SELECTED_TEXT,
  SET_TEXT,
  SET_ACTIVE_EDITOR_ID,
  SET_NEW_DOCUMENT,
  DELETE_DOCUMENT,
} from './actions';
import { getDocument } from './selectors';
import initialState from '../store/initialState';

const documentTemplate = {
  documentId: '',
  selectedText: null,
  editedText: '',
  fileText: '',
  fileName: 'Untitled',
  filePath: null,
};
const EditorReducer = (state = initialState.editor, action) => {
  switch (action.type) {
    case SET_TEXT: {
      const { documentId } = action.payload;
      /* documentIdに対応したdocumentを取得 */
      const document = getDocument(state, documentId);
      if (document === undefined) return { ...state };
      /* editedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        editedText: action.payload.text,
      };
      /* 更新documentを含むdocumentsを生成 */
      const newDocuments = state.documents.map((el) =>
        el.documentId === document.documentId ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }

    case SET_SELECTED_TEXT: {
      const { documentId } = action.payload;
      /* documentIdに対応したdocumentを取得 */
      const document = getDocument(state, documentId);
      if (document === undefined) return { ...state };
      /* selectedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        selectedText: action.payload.selectedText,
      };
      /* 更新documentを含むdocumentsを生成 */
      const newDocuments = state.documents.map((el) =>
        el.documentId === document.documentId ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }

    case SET_ACTIVE_EDITOR_ID:
      return {
        ...state,
        ...action.payload,
      };
    case SET_NEW_DOCUMENT: {
      const newDocument = {
        ...documentTemplate,
        documentId: uuidv4(),
      };
      return {
        ...state,
        /* documentTemplateを追加する */
        documents: [...state.documents, newDocument],
      };
    }
    case DELETE_DOCUMENT: {
      let deletedIndex;
      const deletedDocumentId = action.payload.documentId;
      const { activeDocumentId } = state;
      /* 対象のDocumentを抜いたDocumentsを作成 */
      const newDocuments = state.documents.filter((value, index) => {
        /* 対象のDocumentではない場合 */
        if (value.documentId !== deletedDocumentId) {
          return value;
        }
        /* 対象のDoucumentの場合 */
        deletedIndex = index;
        return null;
      });
      const documentsCount = newDocuments.length;

      let nextActiveEditorIndex;
      switch (true) {
        /* 全てのタブを削除した場合 */
        case documentsCount === 0:
          return {
            ...state,
            activeDocumentId: '',
            documents: [],
          };
        /* アクティブタブを変更しない場合 */
        case deletedDocumentId !== activeDocumentId:
          return {
            ...state,
            activeDocumentId,
            documents: newDocuments,
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
        activeDocumentId: newDocuments[nextActiveEditorIndex].documentId,
        documents: newDocuments,
      };
    }

    default:
      return { ...state };
  }
};
export default EditorReducer;
