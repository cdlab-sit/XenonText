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
    <div className="h-10 flex items-end">
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
      {/* デザインは適当 */}
      <div
        className="flex-auto h-full bg-gray-500"
        onDoubleClick={onDoubleClick}
      >
        タブルクリックで新規documentを作成
      </div>
    </div>
  );
}

Tabs.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
};
