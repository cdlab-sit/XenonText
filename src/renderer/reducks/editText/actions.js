export const SET_TEXT = "SET_TEXT",
    setSelectedText = (EditText) => ({
        "payload": {

            "selectedText": EditText.getSelectedText()

        },
        "type": SET_TEXT
    }),
    setText = (EditText) => ({
        "payload": {

            "text": EditText.getValue()

        },
        "type": SET_TEXT
    });

