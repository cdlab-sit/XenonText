import { createSelector } from 'reselect';

export const getActiveDocument = (editor) => {
  const activeDocument = editor.documents.find(
    (val) => val.editorId === editor.activeEditorId,
  );
  return activeDocument;
};

export const getCharCount = createSelector(
  [(state) => state.editor],
  (editor) => {
    const activeDocument = getActiveDocument(editor);
    if (activeDocument.selectedText) {
      return activeDocument.selectedText.length;
    }
    return activeDocument.editedText.length;
  },
);

// 必要か?
export const getActiveEditorId = createSelector([(state) => state], (state) => {
  return state.activeEditorId;
});

// 必要か?
export const getDocuments = createSelector([(state) => state], (state) => {
  return state.documents;
});

// 必要か?
export const getFileText = createSelector([(state) => state], (state) => {
  return state.fileText;
});

export const getFileStatus = createSelector([(state) => state], (document) => {
  console.log('edit->', document.editedText);
  console.log('file->', document.fileText);
  if (document.editedText === document.fileText) {
    return true;
  }
  return false;
});
