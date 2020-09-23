import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/ext-modelist';
import './theme-xenon';
import React, { useState } from 'react';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  setSelectedText,
  setText,
  setActiveDocumentId,
} from '../reducks/editor/actions';

const fileNameToFileType = (fileName) => {
  const modeList = ace.require('ace/ext/modelist');
  const { mode } = modeList.getModeForPath(fileName);
  const fileType = mode.split('/').pop();

  try {
    /* 対象のファイルタイプのみ読み込む */
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */
    require(`ace-builds/src-noconflict/mode-${fileType}`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`error new mode(${fileType}): ${e}`);
  }
  return fileType;
};

const EditArea = React.memo((props) => {
  const [editorInstance, setEditorInstance] = useState('');

  const { fileName, initialText, documentId } = props;

  /* ファイル名からファイルタイプを設定 */
  const fileType = fileNameToFileType(fileName);

  const dispatch = useDispatch();
  const onChange = () => {
    dispatch(setText(editorInstance, documentId));
  };
  /* editorInstance作成後 */
  const onLoad = (newEditorInstance) => {
    setEditorInstance(newEditorInstance);
    /* ストアにActiveDocumentIdを登録 */
    dispatch(setActiveDocumentId(documentId));
  };
  const onSelectionChange = () => {
    dispatch(setSelectedText(editorInstance, documentId));
  };

  return (
    <div className="bg-gray-900 flex-auto">
      <AceEditor
        value={initialText}
        editorProps={{ $blockScrolling: 'true' }}
        setOptions={{ useWorker: false }}
        fontSize="16px"
        height="100%"
        highlightActiveLine={false}
        mode={fileType}
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
  fileName: PropTypes.string.isRequired,
};

export default EditArea;
