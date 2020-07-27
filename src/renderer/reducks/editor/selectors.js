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
  return state;
});

// 必要か?
export const getDocuments = createSelector([(state) => state], (state) => {
  return state;
});

export const getFileText = createSelector([(state) => state], (state) => {
  return state.fileText;
});

// 未完成
export const getFileStatus = createSelector(
  [(state) => state.file, (state) => state.edit],
  (file, edit) => {
    const activeEditorInfo = getActiveDocument(edit);
    const activeFile = file.find((val) => val.editorId === edit.activeEditorId);
    if (activeEditorInfo.text === activeFile.text) {
      return true;
    }
    return false;
  },
);
