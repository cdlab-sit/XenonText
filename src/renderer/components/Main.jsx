import React from 'react';
import { useSelector } from 'react-redux';
import EditArea from './EditArea';
import Tabs from './Tabs';

import { getActiveEditorId, getDocuments } from '../reducks/editor/selectors';

let showId = 'editor1';

const shouldShow = (id) => {
  if (id !== showId) {
    return false;
  }
  return true;
};

export default function Main() {
  showId = getActiveEditorId(
    useSelector((state) => state.editor.activeEditorId),
  );

  const editSelector = useSelector((state) => state.editor.documents);
  const documents = getDocuments(editSelector);

  return (
    <div className="flex flex-auto flex-col">
      <Tabs />

      {documents.map((document) => {
        return (
          <div
            className={`flex flex-auto ${
              shouldShow(document.editorId) ? '' : 'hidden'
            }`}
            key={document.editorId}
          >
            <EditArea editorId={document.editorId} key={document.editorId} />
          </div>
        );
      })}
    </div>
  );
}
