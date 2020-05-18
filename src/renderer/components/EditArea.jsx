import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
/* eslint-disable */
import "./theme-monokai-default";
/* eslint-enable */
import AceEditor from "react-ace";
import React from "react";

export default function EditArea () {

    return (
        <div className="bg-gray-900 flex-auto">
            <AceEditor
                editorProps={{"$blockScrolling": "true"}}
                focus={false}
                fontSize="10px"
                highlightActiveLine={false}
                mode="c_cpp"
                name="UNIQUE_ID_OF_DIV"
                placeholder="Happy Hacking!!"
                showPrintMargin={false}
                tabSize={4}
                theme="monokai-default"
                width="100%"
                wrapEnabed={false}
            />
        </div>
    );

}
