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

let editorInstance = null;
const EditArea = React.memo(
  (props) => {

    console.log('start EditArea------: ');

    // const initialText = props.fileText;
    const initialText = 'initialText';

    console.log('start =', props.editorId);

    const dispatch = useDispatch();
    const onChange = () => {
      dispatch(setText(editorInstance));
    };
    const onLoad = (newEditorInstance) => {
      editorInstance = newEditorInstance;
      dispatch(setMyEditorId(editorInstance.id));
      dispatch(setActiveEditorId(editorInstance.id));
      dispatch(setText(editorInstance));
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
  },
  (prevProps, nextProps) => {
    console.log('<', nextProps.editorId, '>');
    console.log(prevProps, ' -> Props ->', nextProps);
    if (prevProps.fileText === nextProps.fileText) {
      console.log(true);
      return true;
    }
    console.log(false);
    return false;
  },
);

// EditArea.propTypes = {
//   editorId: PropTypes.string.isRequired,
//   initialText: PropTypes.string.isRequired,
// };

export default EditArea;

// const EditArea = React.memo(function EditArea(props){
//   console.log('start EditArea');
//   return <h1>it is EditArea</h1>;
// });

// export default EditArea;
