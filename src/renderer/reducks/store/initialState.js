import {SET_TEXT} from "../editText/actions";

export const initialState = {

    "editText": {
        "selectedText": "",
        "text": "",
        "type": SET_TEXT
    },
    "fileManager": {

        /*
         * テスト文字列
         * 実際には"fileText"にopenしたファイルの文字列が入る
         */
        "fileText": "abcde"
    }

};
