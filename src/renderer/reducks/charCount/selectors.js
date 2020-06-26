import {createSelector} from "reselect";

export const getCharCount = createSelector(
    [(state) => state.charCount],
    (state) => state.count
);
