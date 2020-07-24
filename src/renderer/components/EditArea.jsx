import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import './theme-xenon';
import React, { useCallback } from 'react';
import { setSelectedText, setText } from '../reducks/edit/actions';
import { useDispatch, useSelector } from 'react-redux';
import AceEditor from 'react-ace';
import { getActiveText } from '../reducks/edit/selectors';
import { getNewText } from '../reducks/file/selectors';

let // エディタインスタンス
  editorInstance = null;

export default function EditArea() {
  const activeText = getActiveText(useSelector((state) => state)),
    dispatch = useDispatch(),
    initialText = getNewText(useSelector((state) => state)),
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

  return (
    <div className="bg-gray-900 flex-auto">
      <AceEditor
        defaultValue={initialText}
        editorProps={{ $blockScrolling: 'true' }}
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
        value={activeText}
        width="100%"
        wrapEnabed={false}
      />
    </div>
  );
}
