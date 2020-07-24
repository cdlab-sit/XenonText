import { editMenu, fileMenu, helpMenu, viewMenu } from './index';
import { remote } from 'electron';

const appName = remote.app.name,
  isMac = process.platform === 'darwin';

let appMenu = [];

if (isMac) {
  appMenu = [
    {
      label: appName,
      submenu: [
        {
          role: 'about',
        },
        {
          type: 'separator',
        },
        {
          role: 'services',
        },
        {
          type: 'separator',
        },
        {
          role: 'hide',
        },
        {
          role: 'hideothers',
        },
        {
          role: 'unhide',
        },
        {
          type: 'separator',
        },
        {
          role: 'quit',
        },
      ],
    },
  ];
}

export default function applicationMenuTemplate() {
  return [...appMenu, fileMenu, editMenu, viewMenu, helpMenu];
}
