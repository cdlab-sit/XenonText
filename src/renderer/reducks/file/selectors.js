import { createSelector } from 'reselect';
import { getActiveEditorInfo } from '../edit/selectors';

export const getFileStatus = createSelector(
    [(state) => state.file, (state) => state.edit],
    (file, edit) => {
      const activeEditorInfo = getActiveEditorInfo(edit),
        activeFile = file.find((val) => val.editorId === edit.activeEditorId);
      if (activeEditorInfo.text === activeFile.text) {
        return true;
      }
      return false;
    },
  ),
  getNewText = createSelector(
    [(state) => state.file, (state) => state.edit],
    (file, edit) => {
      const activeFile = file.find(
          (val) => val.editorId === edit.activeEditorId,
        ),
        fileText = activeFile.text;
      return fileText;
    },
  );
