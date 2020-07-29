import { createSelector } from 'reselect';

export const getActiveDocument = (editor) => {
  const activeDocument = editor.documents.find(
    (val) => val.editorId === editor.activeEditorId,
  );
  return activeDocument;
};

export const getMyDocument = (editor, editorId) => {
  const myDocument = editor.documents.find((val) => val.editorId === editorId);
  return myDocument;
};

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

export const getActiveEditorId = createSelector([(state) => state], (state) => {
  return state.activeEditorId;
});

export const getDocuments = createSelector([(state) => state], (state) => {
  return state.documents;
});

export const getFileText = createSelector([(state) => state], (state) => {
  return state.fileText;
});

export const getFileStatus = createSelector([getMyDocument], (document) => {
  if (document.editedText === document.fileText) {
    return true;
  }
  return false;
});
