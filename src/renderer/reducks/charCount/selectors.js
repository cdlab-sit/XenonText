/* eslint-disable */
import {createSelector} from "reselect"

const charCountSelector = (state) => state.charCount;
export const getCharCount = createSelector(
    [charCountSelector],
    state => state.count
)

/* eslint-able */