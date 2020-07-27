export const SET_SELECTED_TEXT = 'SET_SELECTED_TEXT';
export const SET_TEXT = 'SET_TEXT';
export const SET_ACTIVE_EDITOR_ID = 'SET_ACTIVE_EDITOR_ID';
export const SET_NEW_EDIT = 'SET_NEW_EDIT';

export const setSelectedText = (editorInstance) => ({
  payload: {
    selectedText: editorInstance.getSelectedText(),
  },
  type: SET_SELECTED_TEXT,
});

export const setText = (editorInstance) => ({
  payload: {
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

export const setNewEdit = () => ({
  type: SET_NEW_EDIT,
});
