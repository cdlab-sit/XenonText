import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tab from './Tab';
import { getEditorInfo } from '../reducks/edit/selectors';

import { setNewEdit } from '../reducks/edit/actions';

export default function Tabs() {
  const dispatch = useDispatch();
  const onDoubleClick = (e) => {
    dispatch(setNewEdit());
    console.log('onDoubleClick!!');
    // console.log(e.currentTarget);
  };
  const editSelector = useSelector((state) => state.edit.editorInfo);
  const editorInfo = getEditorInfo(editSelector);
  console.log('editorInfo', editorInfo);
  return (
    <div className="h-10 flex items-end" onDoubleClick={onDoubleClick}>
      {editorInfo.map((editor) => {
        return <Tab editorId={editor.editorId} key={editor.editorId}/>;
      })}
    </div>
  );
}
