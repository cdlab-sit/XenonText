import React from 'react';
import FileSelector from './FileSelector';

export default function SideBar() {
  return (
    <div className="w-full flex flex-col flex-auto mt-10">
      <FileSelector />
    </div>
  );
}
