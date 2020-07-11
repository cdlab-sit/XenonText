import App from "./App";
import {Provider} from "react-redux";
import React from "react";
import createMenu from "./menus/Menus";
import createStore from "./reducks/store/store";
import {remote} from "electron";
import {render} from "react-dom";

const menu = remote.Menu.buildFromTemplate(createMenu()),
    store = createStore();
remote.Menu.setApplicationMenu(menu);

render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("app")
);

