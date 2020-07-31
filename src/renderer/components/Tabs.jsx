import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Tab from './Tab';
import { setNewDocument } from '../reducks/editor/actions';

export default function Tabs(props) {
  const activeDocumentId = useSelector(
    (state) => state.editor.activeDocumentId,
  );
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
            documentId={document.documentId}
            isActive={document.documentId === activeDocumentId}
            key={document.documentId}
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
