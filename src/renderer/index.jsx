import App from "./App";
import {Provider} from "react-redux";
import React from "react";
import createStore from "./reducks/store/store";
import {render} from "react-dom";

const store = createStore();

render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("app")
);
