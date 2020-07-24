import fs from 'fs';
import { remote } from 'electron';

const readFile = (path) => {
  fs.readFile(path, (error, data) => {
    if (error !== null) {
      throw error;
    }
    data.toString();
  });
};

const openFile = () => {
  const fileIndex = 0;
  const options = {
    properties: ['openFile'],
  };

  remote.dialog.showOpenDialog(options).then((path) => {
    if (path) {
      readFile(path.filePaths[fileIndex]);
    }
  });
};

const writeFile = (path, data) => {
  fs.writeFile(path, data, (error) => {
    if (error !== null) {
      throw error;
    }
  });
};

const saveAsFile = () => {
  const options = {
    properties: ['openFile'],
  };

  remote.dialog.showSaveDialog(options).then((path) => {
    if (path) {
      const writeData = 'ここに保存する情報を代入します';
      writeFile(path.filePath, writeData);
    }
  });
};

const fileMenu = {
  label: 'File',
  submenu: [
    {
      label: 'New File',
    },
    {
      click: openFile,
      label: 'Open File',
    },
    {
      label: 'Open File As Recently',
    },
    {
      type: 'separator',
    },
    {
      label: 'Save',
    },
    {
      click: saveAsFile,
      label: 'Save as',
    },
    {
      type: 'separator',
    },
    {
      label: 'Close',
      role: 'close',
    },
  ],
};

export default fileMenu;
