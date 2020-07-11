import {createSelector} from "reselect";

export const getFileStatus = createSelector(
    [
        (state) => state.fileStatus,
        (state) => state.editText
    ],
    (fileStatus, editText) => {

        if (editText.text === fileStatus.fileText) {

            return true;

        }
        return false;

    }

);
