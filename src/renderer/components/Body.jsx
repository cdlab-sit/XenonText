import React from 'react';
import ResizePanel from 'react-resize-panel';
import SideBar from './SideBar';
import Main from './Main';

export default function Body() {
  return (
    <div className="flex flex-auto">
      <ResizePanel
        direction="e"
        handleClass="hidden"
        style={{
          width: '200px',
          /* header+footerの高さ 3rem */
          height: 'calc(100vh - 3rem)',
        }}
      >
        <SideBar />
      </ResizePanel>
      <Main />
    </div>
  );
}
