import {editMenu, fileMenu, helpMenu, viewMenu} from "./index";
import {app} from "electron";

const isMac = process.platform === "darwin";

let appMenu = [];

export default function applicationMenuTemplate () {

    if (isMac) {

        appMenu = [
            {
                "label": app.name,
                "submenu": [
                    {
                        "role": "quit"
                    }
                ]
            }
        ];

    } else {

        appMenu = [];

    }

    return [
        ...appMenu,
        fileMenu,
        editMenu,
        viewMenu,
        helpMenu
    ];

}
