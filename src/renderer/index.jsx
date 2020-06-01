import App from "./App";
import {Menu} from "electron";
import React from "react";
import {render} from "react-dom";
import sampleMenu from "./Menus";

Menu.setApplicationMenu(Menu.buildFromTemplate(sampleMenu()));

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);
