import React from 'react';
import ResizePanel from 'react-resize-panel';
import { useSelector } from 'react-redux';
import SideBar from './SideBar';
import Main from './Main';
import { getSideBarVisibility } from '../reducks/settings/selectors';

export default function Body() {
  const sideBarVisibility = getSideBarVisibility(
    useSelector((state) => state.settings),
  );
  let visibility = '';
  if (sideBarVisibility === false) {
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
