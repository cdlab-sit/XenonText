import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import './theme-xenon';
import React, { useCallback } from 'react';
import AceEditor from 'react-ace';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedText, setText } from '../reducks/editor/actions';
import { getFileText } from '../reducks/editor/selectors';

const EditArea = React.memo(function EditArea({ editorId }) {
  let editorInstance = null;

  const myFileSelector = useSelector((state) =>
    state.editor.documents.find((val) => val.editorId === editorId),
  );
  let initialText = '';
  if (myFileSelector !== undefined) {
    initialText = getFileText(myFileSelector);
  }

  const dispatch = useDispatch();

  const onChange = useCallback(() => {
    // console.log('onChange!', editorInstance.getValue());
    dispatch(setText(editorInstance));
  });
  const onLoad = useCallback((newEditorInstance) => {
    editorInstance = newEditorInstance;
    // console.log('onLoad id=', editorInstance.id);
    dispatch(setText(editorInstance));
  });
  const onSelectionChange = useCallback(() => {
    // console.log('onSelectionChange!');
    dispatch(setSelectedText(editorInstance));
  });
  const onFocus = useCallback(() => {
    // console.log('onFocus\n\n', editorId);
  });

  return (
    <div className="bg-gray-900 flex-auto">
      <AceEditor
        defaultValue={initialText}
        editorProps={{ $blockScrolling: 'true' }}
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
        // value={text}
        width="100%"
        wrapEnabed={false}
      />
    </div>
  );
});

export default EditArea;
