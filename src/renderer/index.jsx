import App from "./App";
import {Provider} from "react-redux";
import React from "react";
import Reducers from "./reducer";
import {createStore} from "redux";
import {render} from "react-dom";

const store = createStore(Reducers);

render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("app")
);
