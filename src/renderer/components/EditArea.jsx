/* eslint-disable */
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "./theme-xenon";
import AceEditor from "react-ace";
import React, {Component}from "react";
import {setCharCount} from "../reducks/charCount/actions";
import {useDispatch} from "react-redux";

export default class EditArea extends Component {
    onSelectionChange(newValue, event) {
        console.log("select-change", newValue);
        console.log("select-change-event", event);
        const selectedText = this.selectedText.current.editor.getSelectedText();
        console.log(selectedText.length);
      }

    constructor() {
        super();
        this.selectedText = React.createRef();
        this.onSelectionChange = this.onSelectionChange.bind(this);
    }
    render() {
        const dispatch = useDispatch();
        return (
            <div className="bg-gray-900 flex-auto">
                <AceEditor
                    // ref={this.text}
                    ref={this.selectedText}
                    editorProps={{"$blockScrolling": "true"}}
                    focus={false}
                    fontSize="16px"
                    height="100%"
                    highlightActiveLine={false}
                    mode="c_cpp"
                    name="UNIQUE_ID_OF_DIV"
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange={(val) => dispatch(setCharCount(val.length))}
                    onSelectionChange={this.onSelectionChange}
                    showPrintMargin={false}
                    tabSize={4}
                    theme="xenon"
                    width="100%"
                    wrapEnabed={false}
                />
            </div>
        );
    }


}

/* eslint-able */
