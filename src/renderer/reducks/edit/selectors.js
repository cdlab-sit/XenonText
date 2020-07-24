import { createSelector } from 'reselect';

export const getActiveEditorInfo = (edit) => {
  const activeEditorInfo = edit.editorInfo.find(
    (val) => val.editorId === edit.activeEditorId,
  );
  return activeEditorInfo;
};

export const getActiveText = createSelector([(state) => state.edit], (edit) => {
  const activeEditorInfo = getActiveEditorInfo(edit);
  return activeEditorInfo.text;
});

export const getCharCount = createSelector([(state) => state.edit], (edit) => {
  const activeEditorInfo = getActiveEditorInfo(edit);

  if (activeEditorInfo.selectedText) {
    return activeEditorInfo.selectedText.length;
  }
  return activeEditorInfo.text.length;
});
