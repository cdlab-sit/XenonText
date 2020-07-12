import {applicationMenuTemplate, contextMenuTemplate} from "./menus/index";
import App from "./App";
import {Provider} from "react-redux";
import React from "react";
import createStore from "./reducks/store/store";
import {remote} from "electron";
import {render} from "react-dom";

const
    applicationMenu = remote.Menu.buildFromTemplate(applicationMenuTemplate()),
    contextMenu = remote.Menu.buildFromTemplate(contextMenuTemplate()),
    store = createStore();

remote.Menu.setApplicationMenu(applicationMenu);

window.addEventListener(
    "contextmenu",
    (event) => {

        event.preventDefault();
        contextMenu.popup(remote.getCurrentWindow());

    },
    false
);

render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("app")
);

