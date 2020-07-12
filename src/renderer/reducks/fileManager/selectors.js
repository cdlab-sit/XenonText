import {createSelector} from "reselect";

export const getFileStatus = createSelector(
        [
            (state) => state.fileManager,
            (state) => state.editText
        ],
        (fileManager, editText) => {

            if (editText.text === fileManager.fileText) {

                return true;

            }
            return false;

        }

    ),
    getNewText = createSelector(
        [(state) => state.fileManager],
        (state) => state.fileText
    );
