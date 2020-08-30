import { v4 as uuidv4 } from 'uuid';

import {
  SET_FILE_TEXT,
  SET_FILE_INFO,
  SET_DOCUMENT_FROM_FILE,
  SET_SELECTED_TEXT,
  SET_EDITED_TEXT,
  SET_ACTIVE_EDITOR_ID,
  SET_NEW_DOCUMENT,
  DELETE_DOCUMENT,
} from './actions';
import initialState from '../store/initialState';
import * as utils from './utils';

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
    case SET_FILE_TEXT: {
      const { documentId, fileText } = action.payload;

      /* documentIdに対応したdocumentを取得 */
      const document = utils.getDocument(state, documentId);
      if (document === undefined) return { ...state };

      /* editedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        fileText,
      };

      /* 更新documentを含むdocumentsを生成 */
      const newDocuments = state.documents.map((el) =>
        el.documentId === document.documentId ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }

    case SET_FILE_INFO: {
      const { documentId, fileText, filePath } = action.payload;
      const fileName = filePath.split('/').reverse()[0];

      /* documentIdに対応したdocumentを取得 */
      const document = utils.getDocument(state, documentId);
      if (document === undefined) return { ...state };

      /* editedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        editedText: fileText,
        fileText,
        filePath,
        fileName,
      };

      /* 更新documentを含むdocumentsを生成 */
      const newDocuments = state.documents.map((el) =>
        el.documentId === document.documentId ? newDocument : el,
      );
      return { ...state, documents: newDocuments };
    }

    case SET_DOCUMENT_FROM_FILE: {
      const { fileText, filePath } = action.payload;

      const fileName = filePath.split('/').reverse()[0];

      const newDocument = {
        ...documentTemplate,
        documentId: uuidv4(),
        editedText: fileText,
        fileText,
        fileName,
        filePath,
      };

      return {
        ...state,
        documents: [...state.documents, newDocument],
      };
    }

    case SET_EDITED_TEXT: {
      const { documentId } = action.payload;
      /* documentIdに対応したdocumentを取得 */
      const document = utils.getDocument(state, documentId);
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
      const document = utils.getDocument(state, documentId);
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
      if (documentsCount === 0) {
        /* 全てのタブを削除した場合 */
        return {
          ...state,
          activeDocumentId: '',
          documents: [],
        };
      }
      if (deletedDocumentId !== activeDocumentId) {
        /* アクティブタブを変更しない場合 */
        return {
          ...state,
          activeDocumentId,
          documents: newDocuments,
        };
      }
      if (documentsCount === deletedIndex) {
        /* 削除したタブが右端の場合 */
        nextActiveEditorIndex = deletedIndex - 1;
      } else {
        /* 削除したタブの右に, 他のタブがある場合 */
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
