import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tab from './Tab';
import { setNewDocument } from '../reducks/editor/actions';
import { getDocuments } from '../reducks/editor/selectors';

export default function Tabs() {
  const dispatch = useDispatch();
  const onDoubleClick = () => {
    dispatch(setNewDocument());
  };

  // Mainからpropsでもってきたほうがいいかもしんない
  const editorDocuments = getDocuments(useSelector((state) => state.editor));
  return (
    <div className="h-10 flex items-end" onDoubleClick={onDoubleClick}>
      {editorDocuments.map((document) => {
        return (
          <Tab
            title={document.fileName}
            editorId={document.editorId}
            key={document.editorId}
          />
        );
      })}
    </div>
  );
}
