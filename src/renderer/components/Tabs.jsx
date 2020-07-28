import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Tab from './Tab';
import { setNewDocument } from '../reducks/editor/actions';

export default function Tabs(props) {
  const activeEditorId = useSelector((state) => state.editor.activeEditorId);
  const { documents } = props;
  const dispatch = useDispatch();

  const onDoubleClick = () => {
    /* 新規ドキュメントをストアに作成 */
    dispatch(setNewDocument());
  };

  return (
    <div className="h-10 flex items-end red" onDoubleClick={onDoubleClick}>
      {documents.map((document) => {
        return (
          <Tab
            title={document.fileName}
            editorId={document.editorId}
            isActive={document.editorId === activeEditorId}
            key={document.editorId}
          />
        );
      })}
    </div>
  );
}

Tabs.propTypes = {
  /* 警告ありarrayダメらしい, どうすんだ */
  documents: PropTypes.array.isRequired,
};
