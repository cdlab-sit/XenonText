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
  const panelStyle = { width: '200px' };
  if (sideBarVisibility === false) {
    panelStyle.display = 'none';
  }

  return (
    <div className="flex flex-auto overflow-y-scroll">
      <ResizePanel direction="e" handleClass="hidden" style={panelStyle}>
        <SideBar />
      </ResizePanel>
      <Main />
    </div>
  );
}
