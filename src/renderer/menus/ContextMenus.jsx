export default function contextMenu () {

    return [
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
            "label": "Select All",
            "role": "selectall"
        }
    ];

}
