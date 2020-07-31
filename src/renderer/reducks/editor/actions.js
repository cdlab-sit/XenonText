export const SET_SELECTED_TEXT = 'SET_SELECTED_TEXT';
export const SET_TEXT = 'SET_TEXT';
export const SET_ACTIVE_EDITOR_ID = 'SET_ACTIVE_EDITOR_ID';
export const SET_NEW_DOCUMENT = 'SET_NEW_DOCUMENT';
export const SET_EDITOR_ID = 'SET_EDITOR_ID';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';

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
  type: SET_TEXT,
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

export const deleteDocument = (documentId) => ({
  payload: {
    documentId,
  },
  type: DELETE_DOCUMENT,
});
