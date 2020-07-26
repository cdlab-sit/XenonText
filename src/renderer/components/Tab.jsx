import React from 'react';
import { useDispatch } from 'react-redux';
import FileStatus from './FileStatus';
import { setActiveEditorId } from '../reducks/edit/actions';

export default function Tab(props) {
  const item = props.editorId; //おかしい, 名前
  const dispatch = useDispatch();
  const onClick = (e) => {
    // e.stopPropagation();
    dispatch(setActiveEditorId(props.editorId));
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
        {item}
      </h2>
      {/* あとでやる */}
      {/* <FileStatus /> */}
    </div>
  );
}
