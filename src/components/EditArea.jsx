import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-text';
import './theme-xenon';
import React, { useState } from 'react';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSelectedText, setText } from '../reducks/editor/actions';

const EditArea = React.memo((props) => {
  const [editorInstance, setEditorInstance] = useState('');

  const { initialText } = props;
  const { documentId } = props;
  const { lang } = props;

  const dispatch = useDispatch();
  const onChange = () => {
    dispatch(setText(editorInstance, documentId));
  };
  /* editorInstance作成後 */
  const onLoad = (newEditorInstance) => {
    setEditorInstance(newEditorInstance);
    /* ストアにActiveDocumentIdを登録 */
    // dispatch(setActiveDocumentId(documentId));
  };
  const onSelectionChange = () => {
    dispatch(setSelectedText(editorInstance, documentId));
  };

  return (
    <div className="bg-gray-900 flex-auto">
      <AceEditor
        value={initialText}
        editorProps={{ $blockScrolling: 'true' }}
        fontSize="16px"
        height="100%"
        highlightActiveLine={false}
        mode={lang}
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
});

EditArea.propTypes = {
  initialText: PropTypes.string.isRequired,
  documentId: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default EditArea;
