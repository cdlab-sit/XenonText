import {initialState} from "../store/initialState";

export const FileManagerReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState.fileManager,
    action
) => ({
    ...state,
    ...action.payload
});

