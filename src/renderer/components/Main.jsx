import React from 'react';
import { useSelector } from 'react-redux';
import EditArea from './EditArea';
import Tabs from './Tabs';

import { getActiveEditorId, getEditorInfo } from '../reducks/edit/selectors';

let num = "editor1";

const checkActive = (i) => {
  if (i !== num) {
    return 'hidden';
  }
  return '';
};

export default function Main() {
  console.log('start Main');
  const activeId = getActiveEditorId(
    useSelector((state) => state.edit.activeEditorId),
  );
  num = activeId;

  const editSelector = useSelector((state) => state.edit.editorInfo);
  const editorInfo = getEditorInfo(editSelector);

  return (
    <div className="flex flex-auto flex-col">
      <Tabs />

      {editorInfo.map((editor) => {
        return (
          <div
            className={`flex flex-auto ${checkActive(editor.editorId)}`}
            key={editor.editorId}
          >
            <EditArea editorId={editor.editorId} key={editor.editorId} />
          </div>
        );
      })}
    </div>
  );
}
