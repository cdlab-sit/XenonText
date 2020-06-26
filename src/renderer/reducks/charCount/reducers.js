import * as Actions from "./actions";
import {initialState} from "../store/initialState";

// eslint-disable-next-line default-param-last
export const CharCountReducer = (state = initialState.charCount, action) => {

    // Switch文必要ないが拡張に備えている
    switch (action.type) {

    case Actions.SET_CHAR_COUNT:
        return {
            // ...state必要ないが拡張に備えている
            ...state,
            ...action
        };
    default:
        return {
            ...state
        };

    }

};

