/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FileStatus from './FileStatus';
import { setActiveDocumentId } from '../reducks/editor/actions';

/* タブの背景色 */
const activeTabBackgroundColor = 'bg-gray-900';
const inactiveTabBackgroundColor = 'bg-gray-800';

/* タブの文字色 */
const activeTabTextColor = 'text-gray-300';
const inactiveTabTextColor = 'text-gray-600';

export default function Tab(props) {
  const { title } = props;
  const { documentId } = props;
  const { isActive } = props;
  const dispatch = useDispatch();

  // タブ(FileStatus以外の場所)が押された時
  const onClick = () => {
    /* activeDocumentIdをストアにセット */
    dispatch(setActiveDocumentId(documentId));
  };

  let tabBackgroundColor = inactiveTabBackgroundColor;
  let tabTextColor = inactiveTabTextColor;
  if (isActive) {
    tabBackgroundColor = activeTabBackgroundColor;
    tabTextColor = activeTabTextColor;
  }

  return (
    <div
      className={`h-8 w-24 flex flex-row items-center ${tabBackgroundColor}`}
      onClick={onClick}
    >
      <h2
        className={`text-xs select-none my-1 ml-2 leading-6 w-full h-6 ${tabTextColor}`}
      >
        {title}
      </h2>
      <FileStatus documentId={documentId} />
    </div>
  );
}

Tab.propTypes = {
  documentId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
