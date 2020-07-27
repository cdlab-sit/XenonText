import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import './theme-xenon';
import React from 'react';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  setSelectedText,
  setText,
  setMyEditorId,
  setActiveEditorId,
} from '../reducks/editor/actions';

const EditArea = React.memo(function EditArea(props) {
  let editorInstance = null;
  const { editorId } = props;
  const { initialText } = props;
  console.log('start EditArea!!!!');

  const dispatch = useDispatch();
  const onChange = () => {
    dispatch(setText(editorInstance));
  };
  const onLoad = (newEditorInstance) => {
    editorInstance = newEditorInstance;
    dispatch(setText(editorInstance));
    // ファイルが新規作成された場合
    if (editorId === '') {
      dispatch(setMyEditorId(editorInstance.id));
      dispatch(setActiveEditorId(editorInstance.id));
    }
  };
  const onSelectionChange = () => {
    dispatch(setSelectedText(editorInstance));
  };
  const onFocus = () => {
    // console.log('onFocus\n\n', props.editorId);
  };

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
        width="100%"
        wrapEnabed={false}
      />
    </div>
  );
});

EditArea.propTypes = {
  editorId: PropTypes.string.isRequired,
  initialText: PropTypes.string.isRequired,
};

export default EditArea;

// const EditArea = React.memo(function EditArea(props){
//   console.log('start EditArea');
//   return <h1>it is EditArea</h1>;
// });

// export default EditArea;
