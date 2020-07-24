export const SET_SELECTED_TEXT = 'SET_SELECTED_TEXT';
export const SET_TEXT = 'SET_TEXT';

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
