/* eslint-disable */
import {remote, shell} from "electron";
import fs from "fs";

function readFile(path) {
    fs.readFile(path, (error, data) => {
        if (error != null) {
            alert("file open error.");
            return;
        }
    })
};

function openFile () {

    const options = {
        "properties": ["openFile"]
    };
    var err = remote.dialog.showOpenDialog(remote.getCurrentWindow(), options).then(path => {
        if (path) {
            readFile(path.filePaths[0]);
        }
    });

};

function writeFile(path, data) {
    fs.writeFile(path, data, (error) => {
        if (error != null) {
            alert("save error");
            return;
        }
    })
}

function saveFile () {
    const options = {
        "properties": ["openFile"]
    };
    remote.dialog.showSaveDialog(remote.getCurrentWindow(), options).then(path => {
        if (path) {
            var write_data = "ここに保存する情報を代入します";
            writeFile(path.filePath, write_data);
        }
    })
}

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
                "label": "New File"
            },
            {
                "click": openFile,
                "label": "Open File"
            },
            {
                "label": "Open File As Recently"
            },
            {
                "type": "separator"
            },
            {
                "click": saveFile,
                "label": "Save"
            },
            {
                "label": "Save as"
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
