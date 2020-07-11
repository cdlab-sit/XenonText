import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "./theme-xenon";
import React, {useCallback} from "react";
import {setSelectedText, setText} from "../reducks/editText/actions";
import AceEditor from "react-ace";
import {useDispatch} from "react-redux";
// Cimport {getNewText} from "../reducks/editText/selectors";

export default function EditArea () {

    let editor = "";
    const dispatch = useDispatch(),
        onChange = useCallback(() => {

            dispatch(setText(editor));

        }),
        onLoad = useCallback((newEditor) => {

            editor = newEditor;

        }),
        onSelectionChange = useCallback(() => {

            dispatch(setSelectedText(editor));

        });
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
                // Cvalue={getNewText(useSelector((state) => state))}
                value="aaaa"
                width="100%"
                wrapEnabed={false}
            />
        </div>
    );

}

/* eslint-able */
