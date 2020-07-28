import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FileStatus from './FileStatus';
import { setActiveEditorId } from '../reducks/editor/actions';

const activeTabColor = 'bg-gray-900';
const inactiveTabColor = 'bg-gray-800';

export default function Tab(props) {
  const { title } = props;
  const { editorId } = props;
  const { isActive } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    /* activeEditorIdをストアにセット */
    console.log('In Tab.jsx editorId: ', editorId);
    dispatch(setActiveEditorId(editorId));
  };

  let tabColor = inactiveTabColor;
  if (isActive) {
    tabColor = activeTabColor;
  }

  return (
    /* divはやめろって警告がでてる, いつか直す */
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
