import {
    combineReducers,
    createStore as reduxCreateStore
} from "redux";

import {EditTextReducer} from "../editText/reducers";
import {FileStatusReducer} from "../fileStatus/reducers";
export default function createStore () {

    return reduxCreateStore(combineReducers({
        "editText": EditTextReducer,
        "fileStatus": FileStatusReducer
    }));

}
