const appmenu = [
    {
        "label": "File",
        "submenu": [
            {
                "label": "New File",
                "role": "undo"
            },
            {
                "label": "Open File",
                "role": "undo"
            },
            {
                "label": "Recently File",
                "role": "undo"
            },
            {
                "type": "separator"
            },
            {
                "label": "Save",
                "role": "undo"
            },
            {
                "label": "Save as",
                "role": "undo"
            },
            {
                "type": "separator"
            },
            {
                "label": "Close",
                "role": "undo"
            }
        ]
    },
    {
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
            }
        ]
    }
];

export default function sampleMenu () {

    return appmenu;

}
