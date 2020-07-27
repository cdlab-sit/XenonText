import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import EditArea from './EditArea';
import Tabs from './Tabs';

import { getActiveEditorId, getDocuments } from '../reducks/editor/selectors';

export default function Main() {
  // EditAreaに文字入力時, なぜ2回呼び出されるのかは不明
  console.log('start Main');

  const editorSelector = useSelector(
    (state) => state.editor,
    // shallowEqualあってもかわんない
    shallowEqual,
  );
  const showId = getActiveEditorId(editorSelector);
  console.log('showId=', showId);
  const documents = getDocuments(editorSelector);

  const shouldShow = (id) => {
    if (id !== showId) {
      return false;
    }
    return true;
  };

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
            <EditArea
              editorId={document.editorId}
              initialText={document.fileText}
              key={document.editorId}
            />
          </div>
        );
      })}
    </div>
  );
}
