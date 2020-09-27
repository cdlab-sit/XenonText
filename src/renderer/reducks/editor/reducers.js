import { v4 as uuidv4 } from 'uuid';

import { remote } from 'electron';
import fs from 'fs';
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
import { getFileStatus } from './selectors';

const { app } = remote;

const pathLib = require('path');

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

      /* documentIdに対応したdocument, documentIndexを取得 */
      const { document, documentIndex } = utils.getDocumentAndIndex(
        state,
        documentId,
      );
      if (document === -1) return { ...state };

      /* editedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        fileText,
      };

      /* 更新documentを含むdocumentsを生成 */
      const { documents } = state;
      const newDocuments = documents.concat();
      newDocuments[documentIndex] = newDocument;
      return { ...state, documents: newDocuments };
    }

    case SET_FILE_INFO: {
      const { documentId, fileText, filePath } = action.payload;
      const fileName = pathLib.basename(filePath);

      /* documentIdに対応したdocument, documentIndexを取得 */
      const { document, documentIndex } = utils.getDocumentAndIndex(
        state,
        documentId,
      );
      if (document === -1) return { ...state };

      /* fileから読み取った情報からdocumentを生成 */
      const newDocument = {
        ...document,
        editedText: fileText,
        fileText,
        filePath,
        fileName,
      };

      /* 更新documentを含むdocumentsを生成 */
      const { documents } = state;
      const newDocuments = documents.concat();
      newDocuments[documentIndex] = newDocument;
      return { ...state, documents: newDocuments };
    }

    case SET_DOCUMENT_FROM_FILE: {
      const { fileText, filePath } = action.payload;

      const fileName = pathLib.basename(filePath);

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
      /* documentIdに対応したdocument, documentIndexを取得 */
      const { document, documentIndex } = utils.getDocumentAndIndex(
        state,
        documentId,
      );
      if (documentIndex === -1) return { ...state };

      /* editedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        editedText: action.payload.text,
      };
      /* 更新documentを含むdocumentsを生成 */
      const { documents } = state;
      const newDocuments = documents.concat();
      newDocuments[documentIndex] = newDocument;
      return { ...state, documents: newDocuments };
    }

    case SET_SELECTED_TEXT: {
      const { documentId } = action.payload;
      /* documentIdに対応したdocumentIndexを取得 */
      const { document, documentIndex } = utils.getDocumentAndIndex(
        state,
        documentId,
      );
      if (documentIndex === -1) return { ...state };
      /* selectedTextを更新したdocumentを生成 */
      const newDocument = {
        ...document,
        selectedText: action.payload.selectedText,
      };
      const { documents } = state;
      /* 更新documentを含むdocumentsを生成 */
      const newDocuments = documents.concat();
      newDocuments[documentIndex] = newDocument;
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
      let deletedDocumentIds;
      let newState = { ...state };

      if (!Array.isArray(action.payload.documentId)) {
        deletedDocumentIds = [action.payload.documentId];
      } else {
        deletedDocumentIds = action.payload.documentId;
      }

      // 名前をつけてファイルを保存
      const saveFileAs = (editor, documentId) => {
        const { document } = utils.getDocumentAndIndex(editor, documentId);

        const options = {
          properties: ['openFile'],
        };

        const path = remote.dialog.showSaveDialogSync(options);
        if (path) {
          const fileText = document.editedText;
          fs.writeFileSync(path, fileText);
        }
        return path;
      };

      // ファイルを保存
      const saveFile = (editor, documentId) => {
        const { document } = utils.getDocumentAndIndex(editor, documentId);

        if (document.filePath) {
          const fileText = document.editedText;
          fs.writeFileSync(document.filePath, fileText);
          return document.filePath;
        }
        return saveFileAs(editor, documentId);
      };

      deletedDocumentIds.some((deletedDocumentId) => {
        const { activeDocumentId } = newState;

        const isSaved = getFileStatus(newState, deletedDocumentId);

        if (!isSaved) {
          const dialogOptions = {
            type: 'question',
            title: app.name,
            message: `閉じる前に "${document.fileName}" への変更を保存しますか？`,
            detail: '保存しない場合、変更内容が失われます。',
            buttons: ['保存', 'キャンセル', '保存しない'],
            cancelId: 1,
            defaultId: 0,
          };

          const selected = remote.dialog.showMessageBoxSync(dialogOptions);
          switch (selected) {
            case 0: // 保存
              if (!saveFile(newState, deletedDocumentId)) {
                newState = { ...newState };
                return true;
              }
              break;
            case 1: // キャンセル
              newState = { ...newState };
              return true;
            case 2: // 保存しない
              // do nothing
              break;
            default:
              // do nothing
              break;
          }
        }

        /* 対象のDocumentを抜いたDocumentsを作成 */
        const newDocuments = newState.documents.filter((value, index) => {
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
          newState = {
            ...newState,
            activeDocumentId: '',
            documents: [],
          };
          action.payload.callback();
        } else {
          if (deletedDocumentId !== activeDocumentId) {
            /* アクティブタブを変更しない場合 */
            newState = {
              ...newState,
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

          newState = {
            ...newState,
            activeDocumentId: newDocuments[nextActiveEditorIndex].documentId,
            documents: newDocuments,
          };
        }
        return false;
      });

      return { ...newState };
    }

    default:
      return { ...state };
  }
};
export default EditorReducer;
