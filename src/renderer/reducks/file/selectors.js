import {createSelector} from "reselect";
import {getActiveEditInfo} from "../edit/selectors";

export const
    getFileStatus = createSelector(
        [
            (state) => state.file,
            (state) => state.edit
        ],
        (file, edit) => {

            const activeEditInfo = getActiveEditInfo(edit),
                activeFile = file.find((val) => val.editorId ===
                    edit.activeEditorId);
            if (activeEditInfo.text === activeFile.text) {

                return true;

            }
            return false;

        }
    ),
    getNewText = createSelector(
        [
            (state) => state.file,
            (state) => state.edit
        ],
        (file, edit) => {

            const fileText = file.find((val) => val.editorId ===
                    edit.activeEditorId).text;

            return fileText;

        }
    );
