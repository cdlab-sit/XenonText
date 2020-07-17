import {
    combineReducers,
    createStore as reduxCreateStore
} from "redux";

import {EditReducer} from "../edit/reducers";
import {FileReducer} from "../file/reducers";
export default function createStore () {

    return reduxCreateStore(combineReducers({
        "edit": EditReducer,
        "file": FileReducer
    }));

}
