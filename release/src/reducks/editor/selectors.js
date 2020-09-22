import { createSelector } from 'reselect';

export const getActiveDocument = (editor) => {
  const activeDocument = editor.documents.find(
    (val) => val.documentId === editor.activeDocumentId,
  );
  return activeDocument;
};

export const getDocument = (editor, documentId) => {
  const document = editor.documents.find(
    (val) => val.documentId === documentId,
  );
  return document;
};

export const getActiveDocumentSelector = createSelector(
  [(state) => state.editor],
  (editor) => {
    const activeDocument = getActiveDocument(editor);
    // activeDocumentがない瞬間があるので条件分岐
    if (activeDocument) {
      return activeDocument;
    }
    return 0;
  },
);

export const getCharCount = createSelector(
  [(state) => state.editor],
  (editor) => {
    const activeDocument = getActiveDocument(editor);
    // activeDocumentがない瞬間があるので条件分岐
    if (activeDocument) {
      // 範囲選択されている場合
      if (activeDocument.selectedText) {
        return activeDocument.selectedText.length;
      }
      // 範囲選択なし場合 -> 全文字数
      return activeDocument.editedText.length;
    }
    return 0;
  },
);

export const getActiveDocumentId = createSelector(
  [(state) => state],
  (state) => {
    return state.activeDocumentId;
  },
);

export const getDocuments = createSelector([(state) => state], (state) => {
  return state.documents;
});

export const getFileText = createSelector([(state) => state], (state) => {
  return state.fileText;
});

export const getFileStatus = createSelector([getDocument], (document) => {
  if (document.editedText === document.fileText) {
    return true;
  }
  return false;
});
