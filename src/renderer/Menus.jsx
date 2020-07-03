/* eslint-disable */
import {remote, shell} from "electron";

function openDialog () {

    const options = {
        "properties": ["openDirectory"],
        "title": "open folder"
    };
    remote.dialog.showOpenDialog(options, function (filenames) {
        remote.ipcRenderer.send("mul-async-dialog", filenames);
        remote.ipcRenderer.on("mul-async-dialog-replay", (event, arg) => {
            msg(arg);
        });
    });

};

const editMenu = {
        "label": "Edit",
        "submenu": [
            {
                "label": "Undo",
                "role": "undo"
            },
            {
                "label": "Redo",
                "role": "redo"
            },
            {
                "type": "separator"
            },
            {
                "label": "Cut",
                "role": "cut"
            },
            {
                "label": "Copy",
                "role": "copy"
            },
            {
                "label": "Paste",
                "role": "paste"
            },
            {
                "label": "Delete",
                "role": "delete"
            },
            {
                "type": "separator"
            },
            {
                "label": "Search"
            },
            {
                "label": "Replace"
            },
            {
                "label": "Select All",
                "role": "selectall"
            }
        ]
    },
    fileMenu = {
        "label": "File",
        "submenu": [
            {
                "click":  () => {

                    openDialog()

                },
                "label": "New File"
            },
            {
                "label": "Open File"
            },
            {
                "label": "Open File As Recently"
            },
            {
                "type": "separator"
            },
            {
                "label": "Save"
            },
            {
                "label": "Save as"
            },
            {
                "type": "separator"
            },
            {
                "label": "Full Screen",
                "role": "togglefullscreen"
            },
            {
                "label": "Minimize",
                "role": "minimize"
            },
            {
                "type": "separator"
            },
            {
                "label": "Close",
                "role": "close"
            }
        ]
    },
    helpMenu = {
        "label": "Help",
        "submenu": [
            {
                "click": async () => {

                    const ur = "https://github.com/cdlab-sit/editor";
                    await shell.openExternal(ur);

                },
                "label": "Learn More"
            },
            {
                "type": "separator"
            },
            {
                "label": "Version"
            }
        ]
    },
    viewMenu = {
        "label": "View",
        "submenu": [
            {
                "label": "Zoom In",
                "role": "zoomin"
            },
            {
                "label": "Zoom Out",
                "role": "zoomout"
            },
            {
                "label": "toggleDevTools",
                "role": "toggledevtools"
            }
        ]
    };

export default function sampleMenu () {

    return [
        fileMenu,
        editMenu,
        viewMenu,
        helpMenu
    ];

}
