import React from 'react';
import ResizePanel from 'react-resize-panel';
import { useSelector } from 'react-redux';
import SideBar from './SideBar';
import Main from './Main';
import { getSideBarSettings } from '../reducks/settings/selectors';

export default function Body() {
  const sideBarSettings = getSideBarSettings(
    useSelector((state) => state.settings),
  );
  let visibility = '';
  if (sideBarSettings.visibility === false) {
    visibility = 'none';
  }

  return (
    <div className="flex flex-auto overflow-y-scroll">
      <ResizePanel
        direction="e"
        handleClass="hidden"
        style={{ width: '200px', display: visibility }}
      >
        <SideBar />
      </ResizePanel>
      <Main />
    </div>
  );
}
