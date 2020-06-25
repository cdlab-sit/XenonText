/* eslint-disable */
const counterReducer = (state = 0, action) => {
    // switch文必要ないが拡張に備えている
    switch (action.type) {
        case "SETCHARCOUNT":
            console.log(action.value)
            return action.value;
        default:
            return state;
    }
};

export default counterReducer
/* eslint-able */
