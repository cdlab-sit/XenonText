/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Tab from './Tab';
import { setNewDocument } from '../reducks/editor/actions';

const newTabImagePathCommand =
  'M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z';

export default function Tabs(props) {
  const activeDocumentId = useSelector(
    (state) => state.editor.activeDocumentId,
  );
  const { documents } = props;
  const dispatch = useDispatch();

  const addNewTab = () => {
    /* 新規ドキュメントをストアに作成 */
    dispatch(setNewDocument());
  };

  return (
    <div className="h-10 flex items-end overflow-scroll scrollbar-hiddon">
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
      {/* プラスボタン */}
      <div className="h-8 flex flex-auto" onDoubleClick={addNewTab}>
        <div className="h-8 w-8 flex items-center" onClick={addNewTab}>
          <svg
            className="w-3 h-3 mx-2 text-gray-800"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              clipRule="evenodd"
              d={newTabImagePathCommand}
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
};
