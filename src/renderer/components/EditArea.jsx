/* eslint-disable import/first */
import 'ace-builds';
// import 'ace-builds/webpack-resolver';
// import 'ace-builds/src-noconflict/worker-json';
// import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';

// eslint-disable-next-line import/order
const ace = require('ace-builds/src-noconflict/ace');

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

// import 'ace-builds/src-noconflict/ext-modelist';

// const fileNameToFileType = (fileName) => {
//   const modelist = ace.require('ace/ext/modelist');

//   const { mode } = modelist.getModeForPath(fileName);
//   const fileType = mode.split('/').pop();

//   if (fileType == null) {
//     return '';
//   }
//   try {
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// require(`ace-builds/src-noconflict/mode-${fileType}`);
//   } catch (e) {
//     console.log(`error new mode(${fileType}): ${e}`);
//   }
//   return fileType;
// };

const EditArea = React.memo((props) => {
  const [editorInstance, setEditorInstance] = useState('');

  const { initialText, documentId } = props;

  // const fileType = fileNameToFileType('blahblah/weee/some.js');
  // console.log(fileType);

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
  // console.log('fileType=', fileType)
  return (
    <div className="bg-gray-900 flex-auto">
      <AceEditor
        value={initialText}
        editorProps={{ $blockScrolling: 'true' }}
        setOptions={{ useWorker: false }}
        fontSize="16px"
        height="100%"
        highlightActiveLine={false}
        // mode={fileType}
        mode="javascript"
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
};

export default EditArea;
