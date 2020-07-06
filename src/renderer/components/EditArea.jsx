import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "./theme-xenon";
import React, {useCallback} from "react";
import AceEditor from "react-ace";
import {setCharCount} from "../reducks/charCount/actions";
import {useDispatch} from "react-redux";

const myRef = React.createRef();

// eslint-disable-next-line one-var
const getAllLength = () => {

        const text = myRef.current.editor.getValue();
        return text.length;

    },
    getSelectedLength = (select) => {

        const empty = select.isEmpty();
        let SelectedLength = 0;
        if (!empty) {

            const text = myRef.current.editor.getSelectedText();
            SelectedLength = text.length;

        } else if (empty) {

            SelectedLength = getAllLength();

        }
        return SelectedLength;

    };

export default function EditArea () {

    const dispatch = useDispatch(),
        updateChar = (length) => {

            dispatch(setCharCount(length));

        };

    // eslint-disable-next-line one-var
    const onChange = useCallback(() => {

            updateChar(getAllLength());

        }),
        onSelectionChange = useCallback((select) => {

            updateChar(getSelectedLength(select));

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
                onSelectionChange={onSelectionChange}
                ref={myRef}
                showPrintMargin={false}
                tabSize={4}
                theme="xenon"
                width="100%"
                wrapEnabed={false}
            />
        </div>
    );

}
