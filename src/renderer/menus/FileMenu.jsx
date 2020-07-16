import fs from "fs";
import {remote} from "electron";

const
    openFile = () => {

        const
            fileIndex = 0,
            options = {
                "properties": ["openFile"]
            };

        remote.dialog.showOpenDialog(options).then((path) => {

            if (path) {

                // eslint-disable-next-line no-use-before-define
                readFile(path.filePaths[fileIndex]);

            }

        });

    },

    readFile = (path) => {

        fs.readFile(
            path,
            (error, data) => {

                if (error !== null) {

                    throw error;

                }
                data.toString();

            }
        );

    },

    saveAsFile = () => {

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

                    throw error;

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
                "label": "Save"
            },
            {
                "click": saveAsFile,
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
