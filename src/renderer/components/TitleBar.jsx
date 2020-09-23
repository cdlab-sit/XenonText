import React from 'react';
import { remote } from 'electron';
import { useSelector } from 'react-redux';
import { getActiveDocument } from '../reducks/editor/selectors';

const pathLib = require('path');

const { app } = remote;

const pathTextColor = 'text-gray-600';

export default function TitleBar() {
  const activeDocument = getActiveDocument(useSelector((state) => state));

  const title = activeDocument ? activeDocument.fileName : app.name;

  const path = activeDocument.filePath
    ? ` – ${pathLib.dirname(activeDocument.filePath)}`
    : '';

  return (
    <header className="w-full h-6">
      <h1
        className="
                    text-xs text-center text-white
                    leading-6 font-medium select-none
                "
      >
        {title}
        <span className={pathTextColor}>{path}</span>
      </h1>
    </header>
  );
}
