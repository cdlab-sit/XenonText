/* eslint-disable */
import {
    combineReducers,
    createStore as reduxCreateStore
} from "redux";

import {CharCountReducer} from "../charCount/reducers";

export default function createStore () {

    return reduxCreateStore(
        combineReducers({
            charCount: CharCountReducer
        })
    );

}

/* eslint-able */

