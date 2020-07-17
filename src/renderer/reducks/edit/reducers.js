import {SET_SELECTED_TEXT, SET_TEXT} from "./actions";
import {getActiveEditInfo} from "./selectors";
import {initialState} from "../store/initialState";

// eslint-disable-next-line default-param-last
export const EditReducer = (state = initialState.edit, action) => {

    const activeEditInfo = getActiveEditInfo(state);
    switch (action.type) {

    case SET_TEXT:
        activeEditInfo.text = action.payload.text;
        break;
    case SET_SELECTED_TEXT:
        activeEditInfo.selectedText = action.payload.selectedText;
        break;
    default:

    }
    return {
        ...state
    };


};
