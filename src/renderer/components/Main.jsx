import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditArea from './EditArea';
import Tabs from './Tabs';

import { getActiveDocumentId, getDocuments } from '../reducks/editor/selectors';
import { setNewDocument } from '../reducks/editor/actions';

export default function Main() {
  // state.editor変更時, なぜ2回呼び出されるのかは不明
  const dispatch = useDispatch();

  const editorState = useSelector((state) => state.editor);
  const activeDocumentId = getActiveDocumentId(editorState);
  const documents = getDocuments(editorState);

  useEffect(() => {
    if (documents.length === 0) {
      dispatch(setNewDocument());
    }
  });

  const shouldShow = (id) => {
    if (id !== activeDocumentId) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-auto flex-col overflow-x-scroll">
      <Tabs documents={documents} />
      {/* documentsに含まれているdocumentを全てレンダリング */}
      {documents.map((document) => {
        return (
          <div
            className={`flex flex-auto ${
              /* アクティブなdocumentのみを表示 */
              shouldShow(document.documentId) ? '' : 'hidden'
            }`}
            key={document.documentId}
          >
            <EditArea
              fileName={document.fileName}
              initialText={document.fileText}
              documentId={document.documentId}
            />
          </div>
        );
      })}
    </div>
  );
}
