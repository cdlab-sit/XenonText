import {
    combineReducers,
    createStore as reduxCreateStore
} from "redux";

import {EditTextReducer} from "../editText/reducers";
import {FileManagerReducer} from "../FileManager/reducers";
export default function createStore () {

    return reduxCreateStore(combineReducers({
        "editText": EditTextReducer,
        "fileManager": FileManagerReducer
    }));

}
