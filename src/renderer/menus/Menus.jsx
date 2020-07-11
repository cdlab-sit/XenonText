import editMenu from "./EditMenu";
import fileMenu from "./FileMenu";
import helpMenu from "./HelpMenu";
import viewMenu from "./ViewMenu";

export default function createMenu () {

    return [
        fileMenu,
        editMenu,
        viewMenu,
        helpMenu
    ];

}
