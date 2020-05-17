/* eslint-disable */
import React from "react";

import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "./theme-monokai-default";
// import "./theme-github"
// import "ace-builds/src-noconflict/theme-monokai"
import AceEditor from "react-ace";

export default function EditArea () {

    return (
        <div className="bg-gray-900 flex-auto">
            <AceEditor
                placeholder="Happy Hacking!!"
                editorProps={{"$blockScrolling": "true"}}
                name="UNIQUE_ID_OF_DIV"
                theme="monokai-default"
                // value="value"
                // defaultValue="defaultValue"
                mode="c_cpp"
                width="100%"
                // height="100%"
                fontSize="10px"
                className=""
                // showGutter={true}
                showPrintMargin={false} //?
                highlightActiveLine={false}
                focus={false} //あるほうがいいかも　好み
                wrapEnabed={false} //設定より変更可能にする//うまくいかない他コンポーネントの設定が必要
                tabSize={4}
            />
        </div>
    );

}
/* eslint-enable */
