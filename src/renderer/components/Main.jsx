import React from 'react';
import ResizePanel from 'react-resize-panel';
import EditArea from './EditArea';
import SideBar from './SideBar';
import Tabs from './Tabs';

export default function Main() {
  return (
    <div className="flex flex-auto">
      <ResizePanel
        direction="e"
        handleClass="hidden"
        style={{ width: '200px' }}
      >
        <SideBar />
      </ResizePanel>
      <div className="flex flex-col w-full">
        <Tabs />
        <EditArea />
      </div>
    </div>
  );
}
