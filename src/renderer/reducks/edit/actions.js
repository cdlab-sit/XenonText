export const
    SET_SELECTED_TEXT = "SET_SELECTED_TEXT",
    SET_TEXT = "SET_TEXT",

    setSelectedText = (editorInstance) => ({
        "payload": {
            "editorId": editorInstance.id,
            "selectedText": editorInstance.getSelectedText()
        },
        "type": SET_SELECTED_TEXT
    }),
    setText = (editorInstance) => ({
        "payload": {
            "editorId": editorInstance.id,
            "text": editorInstance.getValue()
        },
        "type": SET_TEXT
    });

