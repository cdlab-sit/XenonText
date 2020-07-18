import {initialState} from "../store/initialState";

// eslint-disable-next-line default-param-last
export const FileReducer = (state = initialState.file, action) => {

    /* Electron側とつなげるので現在未実装 */
    switch (action.type) {

    default:
        return state;

    }

};

