export const SET_FILE_TEXT = 'SET_FILE_TEXT';
export const SET_FILE_INFO = 'SET_FILE_INFO';
export const SET_DOCUMENT_FROM_FILE = 'SET_DOCUMENT_FROM_FILE';
export const SET_SELECTED_TEXT = 'SET_SELECTED_TEXT';
export const SET_EDITED_TEXT = 'SET_EDITED_TEXT';
export const SET_ACTIVE_EDITOR_ID = 'SET_ACTIVE_EDITOR_ID';
export const SET_NEW_DOCUMENT = 'SET_NEW_DOCUMENT';
export const SET_EDITOR_ID = 'SET_EDITOR_ID';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';

export const setFileText = (documentId, fileText) => ({
  payload: {
    documentId,
    fileText,
  },
  type: SET_FILE_TEXT,
});

export const setFileInfo = (documentId, fileText, filePath) => ({
  payload: {
    documentId,
    fileText,
    filePath,
  },
  type: SET_FILE_INFO,
});

export const setDocumentFromFile = (fileText, filePath) => ({
  payload: {
    fileText,
    filePath,
  },
  type: SET_DOCUMENT_FROM_FILE,
});

export const setSelectedText = (editorInstance, documentId) => ({
  payload: {
    documentId,
    selectedText: editorInstance.getSelectedText(),
  },
  type: SET_SELECTED_TEXT,
});

export const setText = (editorInstance, documentId) => ({
  payload: {
    documentId,
    text: editorInstance.getValue(),
  },
  type: SET_EDITED_TEXT,
});

export const setActiveDocumentId = (documentId) => ({
  payload: {
    activeDocumentId: documentId,
  },
  type: SET_ACTIVE_EDITOR_ID,
});

export const setNewDocument = () => ({
  type: SET_NEW_DOCUMENT,
});

export const setDocumentId = (documentId) => ({
  payload: {
    documentId,
  },
  type: SET_EDITOR_ID,
});

export const deleteDocument = (documentId, callback = () => {}) => ({
  payload: {
    documentId,
    callback,
  },
  type: DELETE_DOCUMENT,
});
