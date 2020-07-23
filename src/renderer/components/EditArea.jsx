import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "./theme-xenon";
import React, {useCallback} from "react";
import {setSelectedText, setText} from "../reducks/edit/actions";
import {useDispatch, useSelector} from "react-redux";
import AceEditor from "react-ace";
import {getActiveText} from "../reducks/edit/selectors";
import {getNewText} from "../reducks/file/selectors";


let
    // エディタインスタンス
    editorInstance = null;

export default function EditArea () {

    let textValue = getNewText(useSelector((state) => state));
    const activeText = getActiveText(useSelector((state) => state)),
        dispatch = useDispatch(),
        onChange = useCallback(() => {

            dispatch(setText(editorInstance));

        }),
        onLoad = useCallback((newEditorInstance) => {

            editorInstance = newEditorInstance;
            dispatch(setText(editorInstance));

        }),
        onSelectionChange = useCallback(() => {

            dispatch(setSelectedText(editorInstance));

        });
    if (editorInstance) {

        textValue = activeText;

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
                value={textValue}
                width="100%"
                wrapEnabed={false}
            />
        </div>
    );

}
