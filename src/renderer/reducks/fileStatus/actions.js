// こんな感じ? electron側とつなげるので現在未実装
export const CHANGE_FILE = "CHANGE_FILE",
    setText = (text) => ({
        "payload": {
            "text": text.getText
        }
    });
