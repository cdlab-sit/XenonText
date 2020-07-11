import {
    combineReducers,
    createStore as reduxCreateStore
} from "redux";

import {CharCountReducer} from "../charCount/reducers";
import {EditTextReducer} from "../editText/reducers";
export default function createStore () {

    return reduxCreateStore(combineReducers({
        "charCount": CharCountReducer,
        "editText": EditTextReducer
    }));

}
