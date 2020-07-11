import {createSelector} from "reselect";

export const getFooterCount = createSelector(
    [(state) => state.editText],
    (editText) => {

        const selectedTextLength = editText.selectedText.length;
        if (!selectedTextLength) {

            return editText.text.length;

        }
        return selectedTextLength;

    }

);

