import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveDocument } from '../reducks/editor/selectors';

const pathTextColor = 'text-gray-600';

export default function TitleBar() {
  const activeDocument = getActiveDocument(useSelector((state) => state));

  const title = activeDocument ? activeDocument.fileName : 'XenonText';

  const path = (() => {
    if (activeDocument.filePath) {
      const pathLength =
        activeDocument.filePath.length - activeDocument.fileName.length;
      return ` - ${activeDocument.filePath.substr(0, pathLength)}`;
    }
    return '';
  })();

  return (
    <header className="w-full h-6">
      <h1
        className="
                    text-xs text-center text-white
                    leading-6 font-medium
                "
      >
        {title}
        <span className={pathTextColor}>{path}</span>
      </h1>
    </header>
  );
}
