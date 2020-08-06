/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import FileStatus from './FileStatus';
import { setActiveDocumentId } from '../reducks/editor/actions';

const activeFileBlockColor = 'bg-gray-800';

export default function FileBlock(props) {
  const { title } = props;
  const { documentId } = props;
  const { isActive } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setActiveDocumentId(documentId));
  };

  let fileBlockColor = '';
  if (isActive) {
    fileBlockColor = activeFileBlockColor;
  }

  return (
    <div
      className={`"h-6 w-full flex flex-row items-center " ${fileBlockColor}`}
    >
      <FileStatus documentId={documentId} />
      <h3
        className="
          text-xs text-gray-300
          leading-6 w-full h-6 select-none
          "
        onClick={onClick}
      >
        {title}
      </h3>
    </div>
  );
}

FileBlock.propTypes = {
  documentId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
