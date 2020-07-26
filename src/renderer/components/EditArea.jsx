import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import './theme-xenon';
import React, { useCallback, useState } from 'react';
import AceEditor from 'react-ace';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedText, setText } from '../reducks/edit/actions';
import { getActiveText, getActiveEditorId } from '../reducks/edit/selectors';
import { getNewText } from '../reducks/file/selectors';

/* useSelectorについて
https://tech.aptpod.co.jp/entry/2020/06/26/090000 */

const EditArea = React.memo(function EditArea(props) {
  let editorInstance = null;
  // console.log('start EditArea: ', props.editorId);
  // const [editorId, setEditorId] = useState(0);
  const myFileSelector = useSelector((state) =>
    state.file.find((val) => val.editorId === props.editorId),
  );
  const initialText = getNewText(myFileSelector);
  // console.log('initialText=', initialText);

  // const myEditSelector = useSelector((state) =>
  //   state.edit.editorInfo.find((val) => val.editorId === editorId),
  // );
  // const { text } = myEditSelector;

  // const text = getActiveText(myEditSelector); //使えない理由不明
  // console.log('text=', myEditSelector.text);
  // console.log('start EditArea: ', editorId);
  const dispatch = useDispatch();

  const onChange = useCallback(() => {
    console.log(editorInstance.id);
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
