import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import './theme-xenon';
import React, { useCallback, useState } from 'react';
import AceEditor from 'react-ace';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedText, setText } from '../reducks/edit/actions';
import { getActiveText } from '../reducks/edit/selectors';
import { getNewText } from '../reducks/file/selectors';

let editorInstance = null;

export default function EditArea() {
  console.log("EditArea");
  const [editorId, setEditorId] = useState(0);
  // const activeText = getActiveText(useSelector((state) => state));
  // const initialText = getNewText(useSelector((state) => state));
  // const dispatch = useDispatch();
  const onChange = useCallback(() => {
    // dispatch(setText(editorInstance));
  });
  const onLoad = useCallback((newEditorInstance) => {
    editorInstance = newEditorInstance;
    setEditorId(editorInstance.id);
    console.log('onLoad id=', editorInstance.id);
    // dispatch(setText(editorInstance));
  });
  const onSelectionChange = useCallback(() => {
    // dispatch(setSelectedText(editorInstance));
  });
  const onFocus = useCallback(() => {
    console.log(editorId);
  });

  return (
    <div className="bg-gray-900 flex-auto">
      <AceEditor
        defaultValue={"initialText"}
        editorProps={{ $blockScrolling: 'true' }}
        focus={true}
        tabSize={12}
        fontSize="16px"
        height="100%"
        highlightActiveLine={false}
        mode="c_cpp"
        name="UNIQUE_ID_OF_DIV"
        onChange={onChange}
        onLoad={onLoad}
        onSelectionChange={onSelectionChange}
        onFocus={onFocus}
        showPrintMargin={false}
        tabSize={4}
        theme="xenon"
        // value={activeText}
        width="100%"
        wrapEnabed={false}
      />
    </div>
  );
}
