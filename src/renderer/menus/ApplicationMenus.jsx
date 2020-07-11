import editMenu from "./EditMenu";
import fileMenu from "./FileMenu";
import helpMenu from "./HelpMenu";
import viewMenu from "./ViewMenu";

export default function applicationMenu () {

    return [
        fileMenu,
        editMenu,
        viewMenu,
        helpMenu
    ];

}
