import React from 'react';
import { useSelector } from 'react-redux';
import EditArea from './EditArea';
import Tabs from './Tabs';

import { getActiveEditorId } from '../reducks/edit/selectors';

let num = 0;

const checkActive = (i) => {
  if (i !== num) {
    return 'hidden';
  }
  return '';
};

const data = [
  { editorId: 'editor1' },
  { editorId: 'editor2' },
  { editorId: 'editor3' },
];
export default function Main() {
  console.log('start Main');
  const activeId = getActiveEditorId(
    useSelector((state) => state.edit.activeEditorId),
  );
  if (activeId === 'editor1') {
    num = 0;
  } else if (activeId === 'editor2') {
    num = 1;
  } else {
    num = 2;
  }

  const list = [];
  for (let i = 0; i < data.length; i += 1) {
    list.push(
      <div key={i} className={`flex flex-auto ${checkActive(i)}`}>
        <EditArea editorId={data[i].editorId} />
      </div>,
    );
  }

  return (
    <div className="flex flex-auto flex-col">
      <Tabs />

      {list}
    </div>
  );
}
