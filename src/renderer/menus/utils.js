import fs from 'fs';
import { remote } from 'electron';
import store from '../reducks/store/store';
import {
  setFileText,
  setFileInfo,
  setDocumentFromFile,
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

  const closeFile = (documentId) => {
    store.dispatch(deleteDocument(documentId));
  };

  return {
    addNewFile,
    openFile,
    saveFileAs,
    saveFile,
    closeFile,
  };
}
