import App from "./App";
import {Provider} from "react-redux";
import React from "react";
import applicationMenu from "./menus/ApplicationMenus";
import contextMenu from "./menus/ContextMenus";
import createStore from "./reducks/store/store";
import {remote} from "electron";
import {render} from "react-dom";

const applicationmenu = remote.Menu.buildFromTemplate(applicationMenu()),
    contextmenu = remote.Menu.buildFromTemplate(contextMenu()),
    store = createStore();
remote.Menu.setApplicationMenu(applicationmenu);

window.addEventListener(
    "contextmenu",
    (event) => {

        event.preventDefault();
        contextmenu.popup(remote.getCurrentWindow());

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

