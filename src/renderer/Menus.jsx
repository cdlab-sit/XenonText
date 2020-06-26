const appmenu = [
    {
        "label": "File",
        "submenu": [
            {
                "label": "New File"
            },
            {
                "label": "Open File"
            },
            {
                "label": "Recently File"
            },
            {
                "type": "separator"
            },
            {
                "label": "Save"
            },
            {
                "label": "Save as"
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
                "type": "separator"
            },
            {
                "label": "Close",
                "role": "close"
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
    {
        "label": "View",
        "submenu": [
            {
                "label": "Zoom In",
                "role": "zoomin"
            },
            {
                "label": "Zoom Out",
                "role": "zoomout"
            }
        ]
    },
    {
        "label": "Help",
        "submenu": [
            {
                "label": "Learn More"
            },
            {
                "type": "separator"
            },
            {
                "label": "Version"
            }
        ]
    }
];

export default function sampleMenu () {

    return appmenu;

}
