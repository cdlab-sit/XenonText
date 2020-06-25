import {combineReducers} from "redux";
import counterReducer from "./counter";

/* eslint-disable */
const Reducers = combineReducers ({
    counter: counterReducer,
})

export default Reducers

/* eslint-able */
