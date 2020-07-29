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

const EditArea = React.memo(
  (props) => {
    let editorInstance = null;
    /*  XenonTextで開いている際, 他のエディタなどでファイルが変更されると
    initialTextが変更され反映される.
    しかしeditorIdも新しくなるためゾンビがのこるかもしれない.
    確認が必要 */
    const { initialText } = props;

    const dispatch = useDispatch();
    const onChange = () => {
      dispatch(setText(editorInstance));
    };
    /* editorInstance作成後 */
    const onLoad = (newEditorInstance) => {
      editorInstance = newEditorInstance;
      /* ストアにeditorIdを登録(初期状態は'') */
      dispatch(setMyEditorId(editorInstance.id));
      /* ストアにActiveEditorIdを登録 */
      dispatch(setActiveEditorId(editorInstance.id));
      /* ストアにTextを登録 */
      dispatch(setText(editorInstance));
    };
    const onSelectionChange = () => {
      dispatch(setSelectedText(editorInstance));
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
          showPrintMargin={false}
          tabSize={4}
          theme="xenon"
          width="100%"
          wrapEnabed={false}
        />
      </div>
    );
  },
  // Props.fileTextが変更されない限り, 再レンダリングしない
  (prevProps, nextProps) => prevProps.fileText === nextProps.fileText,
);

EditArea.propTypes = {
  initialText: PropTypes.string.isRequired,
};

export default EditArea;
