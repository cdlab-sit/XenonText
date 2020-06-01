export default function sampleMenu () {

    return {
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
                "type": "separator"
            },
            {
                "label": "Copy",
                "role": "copy"
            }
        ]
    };

}
