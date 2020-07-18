export const
    SET_SELECTED_TEXT = "SET_SELECTED_TEXT",
    SET_TEXT = "SET_TEXT",

    setSelectedText = (editorInstance) => ({
        "payload": {
            "selectedText": editorInstance.getSelectedText()
        },
        "type": SET_SELECTED_TEXT
    }),
    setText = (editorInstance) => ({
        "payload": {
            "text": editorInstance.getValue()
        },
        "type": SET_TEXT
    });

