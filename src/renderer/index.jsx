import App from "./App";
import React from "react";
import {remote} from "electron";
import {render} from "react-dom";
import sampleMenu from "./Menus";

/* eslint-disable */
console.log(sampleMenu());

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);

const menu = remote.Menu.buildFromTemplate(sampleMenu());
remote.Menu.setApplicationMenu(menu);
