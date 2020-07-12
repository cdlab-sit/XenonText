import {createSelector} from "reselect";

export const getFooterCount = createSelector(
        [(state) => state.editText],
        (editText) => {

            const selectedTextLength = editText.selectedText.length;
            if (selectedTextLength) {

                return selectedTextLength;

            }
            return editText.text.length;

        }

    ),
    // eslint-disable-next-line sort-vars
    getText = createSelector(
        [(state) => state.editText],
        (state) => state.text
    );

