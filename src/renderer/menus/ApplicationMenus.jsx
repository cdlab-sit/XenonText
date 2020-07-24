import { remote } from 'electron';
import fileMenu from './FileMenu';
import editMenu from './EditMenu';
import helpMenu from './HelpMenu';
import viewMenu from './ViewMenu';

const appName = remote.app.name;
const isMac = process.platform === 'darwin';

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
