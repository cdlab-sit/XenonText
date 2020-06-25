/* eslint-disable */
import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CharCountReducer = (state = initialState.charCount, action) => {
    // Comment, switch文必要ないが拡張に備えている
    console.log({...state});
    console.log({...action});
    // console.log();
    switch (action.type) {
    case Actions.SET_CHAR_COUNT:
        return {
            ...action
        };
    default:
        return state;

    }

}

// export default CharCountReducer;
/* eslint-able */
