export const SET_SELECTED_TEXT = 'SET_SELECTED_TEXT';
export const SET_TEXT = 'SET_TEXT';
export const SET_ACTIVE_EDITOR_ID = 'SET_ACTIVE_EDITOR_ID';
export const SET_NEW_DOCUMENT = 'SET_NEW_DOCUMENT';
export const SET_EDITOR_ID = 'SET_EDITOR_ID';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';

export const setSelectedText = (editorInstance) => ({
  payload: {
    editorId: editorInstance.id,
    selectedText: editorInstance.getSelectedText(),
  },
  type: SET_SELECTED_TEXT,
});

export const setText = (editorInstance) => ({
  payload: {
    editorId: editorInstance.id,
    text: editorInstance.getValue(),
  },
  type: SET_TEXT,
});

export const setActiveEditorId = (editorId) => ({
  payload: {
    activeEditorId: editorId,
  },
  type: SET_ACTIVE_EDITOR_ID,
});

export const setNewDocument = () => ({
  type: SET_NEW_DOCUMENT,
});

export const setEditorId = (editorId) => ({
  payload: {
    editorId,
  },
  type: SET_EDITOR_ID,
});

export const deleteDocument = (editorId) => ({
  payload: {
    editorId,
  },
  type: DELETE_DOCUMENT,
});
