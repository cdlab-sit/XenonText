import {editMenu, fileMenu, helpMenu, viewMenu} from "./index";

export default function applicationMenuTemplate () {

    return [
        fileMenu,
        editMenu,
        viewMenu,
        helpMenu
    ];

}
