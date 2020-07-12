import {editMenu, fileMenu, helpMenu, viewMenu} from "./index";

const
    appName = "XenonText",
    isMac = process.platform === "darwin";

let appMenu = [];

if (isMac) {

    appMenu = [
        {
            "label": appName,
            "submenu": [
                {
                    "role": "about"
                },
                {
                    "type": "separator"
                },
                {
                    "role": "services"
                },
                {
                    "type": "separator"
                },
                {
                    "role": "hide"
                },
                {
                    "role": "hideothers"
                },
                {
                    "role": "unhide"
                },
                {
                    "type": "separator"
                },
                {
                    "role": "quit"
                }
            ]
        }
    ];

} else {

    appMenu = [];

}

export default function applicationMenuTemplate () {

    return [
        ...appMenu,
        fileMenu,
        editMenu,
        viewMenu,
        helpMenu
    ];

}
