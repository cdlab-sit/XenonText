import React from 'react';
import Tab from './Tab';

export default function Tabs() {
  return (
    <div className="h-10 flex items-end">
      <Tab editorId={"editor1"} />
      <Tab editorId={"editor2"} />
      <Tab editorId={"editor3"} />
    </div>
  );
}
