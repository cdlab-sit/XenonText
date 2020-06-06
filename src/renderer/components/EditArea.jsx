import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
/* eslint-disable */
import "./theme-xenon";
/* eslint-enable */
import AceEditor from "react-ace";
import React from "react";

export default function EditArea () {

    return (
        <div className="bg-gray-900 flex-auto">
            <AceEditor
                editorProps={{"$blockScrolling": "true"}}
                focus={false}
                fontSize="16px"
                highlightActiveLine={false}
                mode="c_cpp"
                name="UNIQUE_ID_OF_DIV"
                showPrintMargin={false}
                tabSize={4}
                theme="xenon"
                width="100%"
                wrapEnabed={false}
            />
        </div>
    );

}
