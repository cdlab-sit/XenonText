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

  return (
    <div className="flex flex-auto overflow-y-scroll scrollbar-hiddon">
      {sideBarVisibility && (
        <ResizePanel
          direction="e"
          handleClass="hidden"
          style={{ width: '200px' }}
        >
          <SideBar />
        </ResizePanel>
      )}
      <Main />
    </div>
  );
}
