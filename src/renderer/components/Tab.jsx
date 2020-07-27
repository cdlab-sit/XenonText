import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FileStatus from './FileStatus';
import { setActiveEditorId } from '../reducks/editor/actions';

export default function Tab(props) {
  const { title } = props;
  const { editorId } = props;
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setActiveEditorId(editorId));
  };
  return (
    <div
      className="bg-gray-900 h-8 w-40 flex flex-row items-center"
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
  title: PropTypes.string.isRequired,
  editorId: PropTypes.string.isRequired,
};
