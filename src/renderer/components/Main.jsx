import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import EditArea from './EditArea';
import Tabs from './Tabs';

import { getActiveEditorId, getDocuments } from '../reducks/editor/selectors';

export default function Main() {
  // EditAreaに文字入力時, なぜ2回呼び出されるのかは不明
  // というか新規作成時, 2回呼び出されるからおかしくなってる
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
      <Tabs documents={documents} />
      {/* editorIdを更新すると不必要なeditorInstanceが作成される
      多分, 別のものだと認識してReact.memoがつかえないんだろうな */}
      {/* ちがいました, editorIdでkey指定してたからです!! */}
      {documents.map((document, index) => {
        return (
          <div
            className={`flex flex-auto ${
              shouldShow(document.editorId) ? '' : 'hidden'
            }`}
            key={index}
          >
            <EditArea
              // editorId={document.editorId}
              // initialText={document.fileText}
              // key={document.fileText}
              // fileText={"document.fileText"}
              // key={document.fileText}
            />
          </div>
        );
      })}
    </div>
  );
}
