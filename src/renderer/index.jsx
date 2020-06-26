import App from "./App";
import {Provider} from "react-redux";
import React from "react";
import {remote} from "electron";
import createStore from "./reducks/store/store";
import {render} from "react-dom";
import sampleMenu from "./Menus";

const store = createStore();

render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("app")
);

const menu = remote.Menu.buildFromTemplate(sampleMenu());
remote.Menu.setApplicationMenu(menu);
