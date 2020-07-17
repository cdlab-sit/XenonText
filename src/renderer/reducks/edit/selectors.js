import {createSelector} from "reselect";

export const
    getActiveEditInfo = (edit) => {

        const activeEditInfo = edit.editInfo.find((val) => val.editorId ===
        edit.activeEditorId);
        return activeEditInfo;

    },

    getCharCount = createSelector(
        [(state) => state.edit],
        (edit) => {

            const activeEditInfo = getActiveEditInfo(edit);

            if (activeEditInfo.selectedText) {

                return activeEditInfo.selectedText.length;

            }
            return activeEditInfo.text.length;

        }

    ),
    getText = createSelector(
        [(state) => state.edit],
        (edit) => {

            const activeEditInfo = getActiveEditInfo(edit);
            return activeEditInfo.text;

        }
    );
