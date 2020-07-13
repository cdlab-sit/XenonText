import fs from "fs";
import {remote} from "electron";

const
    openFile = () => {

        const
            fileNumber = 0,
            options = {
                "properties": ["openFile"]
            };

        remote.dialog.showOpenDialog(options).then((path) => {

            if (path) {

                // eslint-disable-next-line no-use-before-define
                readFile(path.filePaths[fileNumber]);

            }

        });

    },

    readFile = (path) => {

        fs.readFile(
            path,
            (error, data) => {

                if (error !== null) {

                    return;

                }
                data.toString();

            }
        );

    },

    saveFile = () => {

        const options = {
            "properties": ["openFile"]
        };

        remote.dialog.showSaveDialog(options).then((path) => {

            if (path) {

                const writeData = "ここに保存する情報を代入します";
                // eslint-disable-next-line no-use-before-define
                writeFile(
                    path.filePath,
                    writeData
                );

            }

        });

    },

    writeFile = (path, data) => {

        fs.writeFile(
            path,
            data,
            (error) => {

                if (error !== null) {

                    // eslint-disable-next-line no-useless-return
                    return;

                }

            }
        );

    },
    // eslint-disable-next-line sort-vars
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
    };

export default fileMenu;
