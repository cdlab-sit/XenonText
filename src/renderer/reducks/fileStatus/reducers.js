import {initialState} from "../store/initialState";

// eslint-disable-next-line default-param-last
export const FileStatusReducer = (state = initialState.fileStatus, action) => ({
    ...state,
    ...action.payload
});

