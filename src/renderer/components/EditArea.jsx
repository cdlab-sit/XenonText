import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
/* eslint-disable */
import "./theme-xenon";

import AceEditor from "react-ace";
import React from "react";
import { setCharCount } from "../reducks/charCount/actions";
import { useDispatch } from "react-redux";

export default function EditArea() {
    const dispatch = useDispatch();
    // const onChange = (val) => {
    //     // console.log(value);
    //     console.log(val.length);
    // };


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
                onChange={(val) => dispatch(setCharCount(val.length))}
                // onChange={val => { onChange(val); }}
                showPrintMargin={false}
                tabSize={4}
                theme="xenon"
                width="100%"
                wrapEnabed={false}
            />
        </div>

    )
};



/* eslint-enable */
