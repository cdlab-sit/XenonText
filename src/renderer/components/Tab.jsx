/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FileStatus from './FileStatus';
import { setActiveEditorId } from '../reducks/editor/actions';

const activeTabColor = 'bg-gray-900';
const inActiveTabColor = 'bg-gray-800';

export default function Tab(props) {
  const { title } = props;
  const { editorId } = props;
  const { isActive } = props;
  const dispatch = useDispatch();

  // タブ(FileStatus以外の場所)が押された時
  const onClick = () => {
    /* activeEditorIdをストアにセット */
    dispatch(setActiveEditorId(editorId));
  };

  let tabColor = inActiveTabColor;
  if (isActive) {
    tabColor = activeTabColor;
  }

  return (
    <div
      className={`"h-8 w-40 flex flex-row items-center " ${tabColor}`}
      onClick={onClick}
    >
      <h2
        className="
                text-xs text-gray-300 select-none
                my-1 ml-2 leading-6
                w-full h-6
                "
      >
        {title}
      </h2>
      <FileStatus editorId={editorId} />
    </div>
  );
}

Tab.propTypes = {
  editorId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
