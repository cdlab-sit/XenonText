import React from 'react';
import FileStatus from './FileStatus';

export default function MyTab() {
  const item = 'Untitled';

  return (
    <>
      <h2
        className="
                text-xs text-gray-300 select-none
                my-1 ml-2 leading-6
                w-full h-6
                "
      >
        {item}
      </h2>
      <FileStatus />
    </>
  );
}
