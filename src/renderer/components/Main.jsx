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
  const activeEditorId = getActiveEditorId(editorSelector);
  const documents = getDocuments(editorSelector);

  /* これでできたけど根本的な理由は不明, あとで調べる */
  useEffect(() => {
    if (documents.length === 0) {
      dispatch(setNewDocument());
    }
  });

  const shouldShow = (id) => {
    if (id !== activeEditorId) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-auto flex-col">
      <Tabs documents={documents} />
      {/* documentsに含まれているdocumentを全てレンダリング */}
      {documents.map((document, index) => {
        return (
          <div
            className={`flex flex-auto ${
              /* アクティブなdocumentのみを表示 */
              shouldShow(document.editorId) ? '' : 'hidden'
            }`}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <EditArea initialText={document.fileText} />
          </div>
        );
      })}
    </div>
  );
}
