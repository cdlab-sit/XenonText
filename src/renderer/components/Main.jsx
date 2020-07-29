import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditArea from './EditArea';
import Tabs from './Tabs';

import { getActiveEditorId, getDocuments } from '../reducks/editor/selectors';
import { setNewDocument } from '../reducks/editor/actions';

export default function Main() {
  // state.editor変更時, なぜ2回呼び出されるのかは不明
  const dispatch = useDispatch();

  const editorSelector = useSelector((state) => state.editor);
  const showId = getActiveEditorId(editorSelector);
  const documents = getDocuments(editorSelector);

  /* これでできたけど根本的な理由は不明, あとで調べる */
  useEffect(() => {
    if (documents.length === 0) {
      dispatch(setNewDocument());
    }
  });

  const shouldShow = (id) => {
    if (id !== showId) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-auto flex-col">
      <Tabs documents={documents} />
      {documents.map((document) => {
        return (
          <div
            className={`flex flex-auto ${
              shouldShow(document.editorId) ? '' : 'hidden'
            }`}
            key={document}
          >
            <EditArea initialText={document.fileText} />
          </div>
        );
      })}
    </div>
  );
}
