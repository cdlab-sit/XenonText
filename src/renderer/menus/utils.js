import fs from 'fs';
import { remote } from 'electron';
import store from '../reducks/store/store';
import {
  setFileText,
  setFileInfo,
  setDocumentFromFile,
  setActiveDocumentId,
  setNewDocument,
  deleteDocument,
} from '../reducks/editor/actions';

const getActiveDocumentAndId = () => {
  const { activeDocumentId } = store.getState().editor;
  const activeDocument = store
    .getState()
    .editor.documents.find((val) => val.documentId === activeDocumentId);
  return { activeDocument, activeDocumentId };
};

const getFileStatus = (documentId) => {
  const document = store
    .getState()
    .editor.documents.find((val) => val.documentId === documentId);
  return document.fileText === document.editedText;
};

const getFileName = (documentId) => {
  const document = store
    .getState()
    .editor.documents.find((val) => val.documentId === documentId);
  return document.fileName;
};

export default function utils() {
  // 新規ファイル追加
  const addNewFile = () => {
    store.dispatch(setNewDocument());
  };

  // ファイル読み込み
  const readFile = (path) => {
    const data = fs.readFileSync(path);
    return data.toString();
  };

  const openFile = () => {
    const fileIndex = 0;
    const options = {
      properties: ['openFile'],
    };

    remote.dialog.showOpenDialog(options).then((path) => {
      if (path) {
        const filePath = path.filePaths[fileIndex];
        const fileText = readFile(filePath);
        store.dispatch(setDocumentFromFile(fileText, filePath));
      }
    });
  };

  // 名前を付けて保存
  const saveFileAs = () => {
    const options = {
      properties: ['openFile'],
    };
    const path = remote.dialog.showSaveDialogSync(options);
    if (path) {
      const { activeDocument, activeDocumentId } = getActiveDocumentAndId();
      const fileText = activeDocument.editedText;
      fs.writeFileSync(path, fileText);
      store.dispatch(setFileInfo(activeDocumentId, fileText, path));
    }
  };

  // ファイルの保存
  const saveFile = () => {
    const { activeDocument, activeDocumentId } = getActiveDocumentAndId();
    if (activeDocument.filePath) {
      const fileText = activeDocument.editedText;
      fs.writeFileSync(activeDocument.filePath, fileText);
      store.dispatch(setFileText(activeDocumentId, fileText));
    } else {
      saveFileAs();
    }
  };

  // ファイルを閉じる
  const closeFile = (documentId) => {
    const IsSaved = getFileStatus(documentId);
    if (IsSaved === true) {
      // ファイルが保存されている場合(変更がない場合)
      store.dispatch(deleteDocument(documentId));
    } else {
      // ファイルが保存されていない場合(変更がある場合)
      store.dispatch(setActiveDocumentId(documentId));
      const fileName = getFileName(documentId);
      const dialogOptions = {
        type: 'question',
        message: `閉じる前に "${fileName}" への変更を保存しますか？`,
        detail: '保存しない場合、変更内容が失われます。',
        buttons: ['保存', 'キャンセル', '保存しない'],
        cancelId: 1, // Escキー入力時
        defaultId: 0,
      };
      // activeDocumentIdの変更をレンダリングするため、setTimeoutを利用
      setTimeout(() => {
        const selected = remote.dialog.showMessageBoxSync(dialogOptions);
        switch (selected) {
          case 0: // 保存
            saveFile();
            store.dispatch(deleteDocument(documentId));
            break;
          case 1: // キャンセル
            // do nothing
            break;
          case 2: // 保存しない
            store.dispatch(deleteDocument(documentId));
            break;
          default:
            break;
        }
      }, 0);
    }
  };

  return {
    addNewFile,
    openFile,
    saveFileAs,
    saveFile,
    closeFile,
  };
}
