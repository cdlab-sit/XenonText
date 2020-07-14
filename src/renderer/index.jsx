import App from "./App";
import {Provider} from "react-redux";
import React from "react";
import {applicationMenuTemplate} from "./menus/index";
import createStore from "./reducks/store/store";
import {remote} from "electron";
import {render} from "react-dom";

const
    applicationMenu = remote.Menu.buildFromTemplate(applicationMenuTemplate()),
    store = createStore();

remote.Menu.setApplicationMenu(applicationMenu);

render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("app")
);
