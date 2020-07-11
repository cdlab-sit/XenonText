/* eslint-disable */
import fs from "fs";
import {remote} from "electron";

const openFile = () => {

        const fileNumber = 0,
            options = {
                "properties": ["openFile"]
            },
            win = remote.getCurrentWindow();

        remote.dialog.showOpenDialog(
            win,
            options
        ).then((path) => {

            if (path) {

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
            },
            win = remote.getCurrentWindow();

        remote.dialog.showSaveDialog(
            win,
            options
        ).then((path) => {

            if (path) {

                const writeData = "ここに保存する情報を代入します";
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

                    return;

                }

            }
        );

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
    };

export default fileMenu;
