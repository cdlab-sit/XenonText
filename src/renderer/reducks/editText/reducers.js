import {SET_TEXT} from "./actions";
import {initialState} from "../store/initialState";

// eslint-disable-next-line default-param-last
export const EditTextReducer = (state = initialState.editText, action) => {

    switch (action.type) {

    case SET_TEXT:
        return {
            ...state,
            ...action.payload
        };
    default:
        return {
            ...state
        };

    }

};

