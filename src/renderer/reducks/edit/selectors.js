import { createSelector } from 'reselect';

export const getActiveEditorInfo = (edit) => {
  const activeEditorInfo = edit.editorInfo.find(
    (val) => val.editorId === edit.activeEditorId,
  );
  return activeEditorInfo;
};

export const getActiveText = createSelector([(state) => state], (state) => {
  const { text } = state;
  return text;
});

export const getCharCount = createSelector([(state) => state.edit], (edit) => {
  const activeEditorInfo = getActiveEditorInfo(edit);

  if (activeEditorInfo.selectedText) {
    return activeEditorInfo.selectedText.length;
  }
  return activeEditorInfo.text.length;
});

export const getActiveEditorId = createSelector([(state) => state], (state) => {
  return state;
});

export const getEditorInfo = createSelector([(state) => state], (state) => {
  return state;
});
