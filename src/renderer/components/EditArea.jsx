import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "./theme-xenon";
import React, {useCallback} from "react";
import {setSelectedText, setText} from "../reducks/editText/actions";
import {useDispatch, useSelector} from "react-redux";
import AceEditor from "react-ace";
import {getNewText} from "../reducks/fileManager/selectors";
import {getText} from "../reducks/editText/selectors";


let
    editor = "",
    value = "";

export default function EditArea () {

    value = getNewText(useSelector((state) => state));
    const dispatch = useDispatch(),
        onChange = useCallback(() => {

            dispatch(setText(editor));

        }),
        onLoad = useCallback((newEditor) => {

            editor = newEditor;
            dispatch(setText(editor));

        }),
        onSelectionChange = useCallback(() => {

            dispatch(setSelectedText(editor));

        }),
        text = getText(useSelector((state) => state));
    if (editor) {

        value = text;

    }
    return (
        <div className="bg-gray-900 flex-auto">
            <AceEditor
                editorProps={{"$blockScrolling": "true"}}
                focus={false}
                fontSize="16px"
                height="100%"
                highlightActiveLine={false}
                mode="c_cpp"
                name="UNIQUE_ID_OF_DIV"
                onChange={onChange}
                onLoad={onLoad}
                onSelectionChange={onSelectionChange}
                showPrintMargin={false}
                tabSize={4}
                theme="xenon"
                value={value}
                width="100%"
                wrapEnabed={false}
            />
        </div>
    );

}
