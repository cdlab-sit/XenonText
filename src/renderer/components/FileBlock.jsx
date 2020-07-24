import { FileStatus } from '../components/index';
import React from 'react';

export default function FileBlock() {
  const item = 'untitled';

  return (
    <div className="flex h-6 w-full bg-gray-800 items-center">
      <FileStatus />
      <h3
        className="
                text-xs text-gray-300
                leading-6 w-32 h-6 select-none
                "
      >
        {item}
      </h3>
    </div>
  );
}
